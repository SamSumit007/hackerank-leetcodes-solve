import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Scanner;

public class Solution {
	/**
	 * Map Keys: horizontal levels of the tree.
	 * 
	 * Map Values: nodes that occur at a particular horizontal level.
	 */
	private static Map<Integer, List<Node>> levelsToNodes;

	/**
	 * Stores all tree nodes.
	 */
	static Node[] nodes;

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		int numberOfNodes = scanner.nextInt();
		nodes = new Node[numberOfNodes + 1];
		levelsToNodes = new HashMap<Integer, List<Node>>();
		createTree(nodes, scanner);

		int numberOfQueries = scanner.nextInt();
		int[] queries = new int[numberOfQueries];
		for (int i = 0; i < numberOfQueries; i++) {
			queries[i] = scanner.nextInt();
		}
		scanner.close();
		swapsForAllQueries(queries);
	}

	/**
	 * Creates a tree from the input data.
	 * 
	 * Sets the horizontal level for each node.
	 */
	public static void createTree(Node[] nodes, Scanner scanner) {

		for (int i = 1; i < nodes.length; i++) {
			nodes[i] = new Node(i);
		}
		nodes[1].setHorizontalLevel(1);
		fillMap(1, nodes[1]);

		for (int i = 1; i < nodes.length; i++) {
			int left = scanner.nextInt();
			int right = scanner.nextInt();

			if (left > 0) {
				nodes[i].left = nodes[left];
				int level = nodes[i].horizontalLevel + 1;
				nodes[left].setHorizontalLevel(level);
				fillMap(level, nodes[left]);
			}
			if (right > 0) {
				nodes[i].right = nodes[right];
				int level = nodes[i].horizontalLevel + 1;
				nodes[right].setHorizontalLevel(level);
				fillMap(level, nodes[right]);
			}
		}
	}

	/**
	 * Fills the Map with the corresponding levels and nodes.
	 */
	private static void fillMap(Integer level, Node node) {
		if (!levelsToNodes.containsKey(level)) {
			List<Node> list = new ArrayList<Node>();
			list.add(node);
			levelsToNodes.put(level, list);
		} else {
			levelsToNodes.get(level).add(node);
		}
	}

	/**
	 * Swaps the nodes for a particular query.
	 */
	private static void swapNodes(Node root, int query) {

		int step = 1;
		int level = query * step;
		while (levelsToNodes.containsKey(level)) {
			for (int i = 0; i < levelsToNodes.get(level).size(); i++) {
				Node node = levelsToNodes.get(level).get(i);
				Node temp = node.left;
				node.left = node.right;
				node.right = temp;
			}
			level = (++step) * query;
		}
		print_Inorder(root);
	}

	private static void print_Inorder(Node root) {
		if (root != null) {
			print_Inorder(root.left);
			System.out.print(root.data + " ");
			print_Inorder(root.right);
		}
	}

	/**
	 * Swaps the nodes for all queries.
	 */
	private static void swapsForAllQueries(int[] queries) {
		Node root = nodes[1];
		for (int i = 0; i < queries.length; i++) {
			swapNodes(root, queries[i]);
			System.out.println();
		}
	}
}

class Node {
	int data;
	int horizontalLevel;
	Node left;
	Node right;

	public Node(int data) {
		this.data = data;
	}

	public void setHorizontalLevel(int horizontalLevel) {
		this.horizontalLevel = horizontalLevel;
	}
}
