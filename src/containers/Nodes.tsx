import React, { useState, useEffect } from "react";
import { Node as NodeType } from "../types/Node";
import Node from "../components/Node";
import { Typography, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../store/configureStore";
import { checkNodesStatus, selectNodes } from "../reducers/nodes";

const mockData = [
  [
    {
      blockNumber: 1,
      blockContent: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sunt nobis veniam esse provident rem quae? Voluptate iusto hic voluptatem ratione dolores quasi velit reiciendis aspernatur! Eum cupiditate id eaque!',
    },
    {
      blockNumber: 2,
      blockContent: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    }
  ],
  [
    {
      blockNumber: 10,
      blockContent: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sunt nobis veniam esse provident rem quae? Voluptate iusto hic voluptatem ratione dolores quasi velit reiciendis aspernatur! Eum cupiditate id eaque!',
    },
    {
      blockNumber: 20,
      blockContent: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    }
  ],
  [
    {
      blockNumber: 100,
      blockContent: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sunt nobis veniam esse provident rem quae? Voluptate iusto hic voluptatem ratione dolores quasi velit reiciendis aspernatur! Eum cupiditate id eaque!',
    },
    {
      blockNumber: 200,
      blockContent: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    }
  ],
  [
    {
      blockNumber: 1000,
      blockContent: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sunt nobis veniam esse provident rem quae? Voluptate iusto hic voluptatem ratione dolores quasi velit reiciendis aspernatur! Eum cupiditate id eaque!',
    },
    {
      blockNumber: 2000,
      blockContent: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    }
  ],
]

export const Nodes: React.FC = () => {
  const [expandedNodeURL, setExpandedNodeURL] = useState<null | string>(null);
  const dispatch = useDispatch();
  const nodes = useAppSelector(selectNodes);

  useEffect(() => {
    dispatch(checkNodesStatus(nodes));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function toggleNodeExpanded(node: NodeType) {
    setExpandedNodeURL(node.url === expandedNodeURL ? null : node.url);
  }

  return (
    <Box paddingTop={7}>
      <Typography variant="h4" component="h1">
        <strong style={{ color: "#000" }}>Nodes</strong>
      </Typography>
      {nodes.map((node, index) => (
        <Node
          node={node}
          key={node.url}
          expanded={node.url === expandedNodeURL}
          toggleNodeExpanded={toggleNodeExpanded}
          nodeInfo={mockData[index]}
        />
      ))}
    </Box>
  );
};

export default Nodes;
