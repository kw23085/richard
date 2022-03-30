import "./index.css";

interface IBlockProps {
	blockNumber: number;
	blockContent: string;
}

const Block = ({blockNumber, blockContent}: IBlockProps) => {
	return(
		<div className="block">
				<h2 className="block-number">{blockNumber}</h2>
				<p className="block-content">{blockContent}</p>
		</div>
	);
};

export default Block;