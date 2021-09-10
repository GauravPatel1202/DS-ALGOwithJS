class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
        this.nextRight = null;
    }
}
  
var  root1,root2;
  
    /* A utility function to check whether
       trees with roots as root1 and
       root2 are identical or not */
    function areIdentical(root1,  root2)
    {
  
        /* base cases */
        if (root1 == null && root2 == null)
            return true;
  
        if (root1 == null || root2 == null)
            return false;
  
        /* Check if the data of both roots
           is same and data of left and right
           subtrees are also same */
        return (root1.data == root2.data
                && areIdentical(root1.left, root2.left)
                && areIdentical(root1.right, root2.right));
    }
  
    /* This function returns true if S
    is a subtree of T, otherwise false */
    function isSubtree(T,  S)
    {
        /* base cases */
        if (S == null)
            return true;
  
        if (T == null)
            return false;
  
        /* Check the tree with root as current node */
        if (areIdentical(T, S))
            return true;
  
        /* If the tree with root as
           current node doesn't match then
           try left and right subtrees one by one */
        return isSubtree(T.left, S)
                || isSubtree(T.right, S);
    }
  
          
        // TREE 1
        /* Construct the following tree
              26
             /   \
            10     3
           /    \     \
          4      6      3
           \
            30  */
           
        root1 = new Node(26);
        root1.right = new Node(3);
        root1.right.right = new Node(3);
        root1.left = new Node(10);
        root1.left.left = new Node(4);
        root1.left.left.right = new Node(30);
        root1.left.right = new Node(6);
  
        // TREE 2
        /* Construct the following tree
           10
         /    \
         4      6
          \
          30  */
           
        root2 = new Node(10);
        root2.right = new Node(6);
        root2.left = new Node(4);
        root2.left.right = new Node(30);
  
        if (isSubtree(root1, root2))
            document.write("Tree 2 is subtree of Tree 1 ");
        else
            document.write("Tree 2 is not a subtree of Tree 1");