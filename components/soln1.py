import sys

# The number of nodes can be large, so a deep recursion might occur
# on a path-like tree. We increase Python's default recursion limit.
sys.setrecursionlimit(2 * 10**5 + 50)

def getMinimumHeight(tree_nodes, tree_from, tree_to, max_operations):
    if tree_nodes <= 1:
        return 0
    adj = [[] for _ in range(tree_nodes + 1)]
    for i in range(len(tree_from)):
        u, v = tree_from[i], tree_to[i]
        adj[u].append(v)
        adj[v].append(u)

    children = [[] for _ in range(tree_nodes + 1)]
    q = [1]
    visited = {1}
    
    head = 0
    while head < len(q):
        parent_node = q[head]
        head += 1
        for neighbor in adj[parent_node]:
            if neighbor not in visited:
                visited.add(neighbor)
                children[parent_node].append(neighbor)
                q.append(neighbor)

    low = 1
    high = tree_nodes
    ans_in_nodes = tree_nodes

    while low <= high:
        target_h_nodes = low + (high - low) // 2
        ops_needed = 0
        def dfs_check(u):
            nonlocal ops_needed
            if not children[u]:
                return 1
            max_h_child = 0
            for c in children[u]:
                max_h_child = max(max_h_child, dfs_check(c))
            my_h = 1 + max_h_child
            if u != 1 and my_h == target_h_nodes:
                ops_needed += 1

                return 0
            
            return my_h

        dfs_check(1)
        
        if ops_needed <= max_operations:
            ans_in_nodes = target_h_nodes
            high = target_h_nodes - 1
        else:
            low = target_h_nodes + 1
            
    return ans_in_nodes - 1