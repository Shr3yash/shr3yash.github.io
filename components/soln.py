
from math import hypot

def can_meet(locations):
    n = len(locations)
    if n < 2:
        return False

    pts = [complex(x, y) for x, y in locations]

    # already together?
    if max(
        (abs(pts[i] - pts[j]) for i in range(n) for j in range(i + 1, n)),
        default=0.0,
    ) == 0.0:
        return True

    # two points always meet at the midpoint
    if n == 2:
        return True

    dt = 0.05          # step size
    EPS = 1e-3         # proximity threshold to consider "met"
    STEPS = 20000      # run long enough

    for _ in range(STEPS):
        directions = []
        # each point moves toward its nearest other point (tie -> smaller index)
        for i in range(n):
            j = min((k for k in range(n) if k != i),
                    key=lambda k: (abs(pts[k] - pts[i]), k))
            delta = pts[j] - pts[i]
            directions.append(0j if delta == 0 else delta / abs(delta))

        # advance all points together
        for i in range(n):
            pts[i] += directions[i] * dt
        spread = max(abs(pts[i] - pts[j]) for i in range(n) for j in range(i + 1, n))
        if spread < EPS:
            return True
        for i in range(n):
            for j in range(i + 1, n):
                if abs(pts[i] - pts[j]) < EPS:
                    return False

    return False


# ---- I/O wrapper (keeps the judge's expected format: a Python list of booleans) ----
if __name__ == "__main__":
    import sys
    data = sys.stdin.read().strip().split()
    it = iter(data)
    t = int(next(it))
    results = []
    for _ in range(t):
        m = int(next(it))
        case = []
        for _ in range(m):
            x = float(next(it)); y = float(next(it))
            case.append((x, y))
        results.append(can_meet(case))
    print(results)
