var hasPathSum = function(root, Sum) {
        if (root == null)
            return false;
        
        if (root.left == null && root.right == null && root.val == Sum)
            return true;
        
        return hasPathSum(root.left, Sum-root.val) || hasPathSum(root.right, Sum-root.val);    
    }
