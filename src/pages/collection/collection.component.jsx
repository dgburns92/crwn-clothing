import React from 'react';
import './collection.styles.scss';
import CollectionItem from '../../components/collection-item/collection-item.component.jsx';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';

const CollectionPage = ({collection}) => (
	<div className="collection-page">
		<h1 className="title">{collection.title}</h1>
		<div className="items">
			{
				collection.items
					.map(item => (
						<CollectionItem key={item.id} item={item} />
					))
			}
		</div>
	</div>
);

const mapStateToProps = (state, ownProps) => ({
	collection: selectCollection(ownProps.match.params.collection)(state)
});

export default connect(mapStateToProps)(CollectionPage);
