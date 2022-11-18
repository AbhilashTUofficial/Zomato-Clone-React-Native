import { FlatList, View } from 'react-native';
import React from 'react';
import { connect } from 'react-redux';

import ElongatedCard from './ElongatedCard';
import Heading from '../Common/Heading';

//? A horinontal scroll view which can display restaurants 
//? as a elevated card.
const HorizontalScrollView = ({ recommendedList, biryaniList, newData }) => {
    return (
        <View
            style={{
                width: "100%",
                paddingVertical: 6
            }}>

            <Heading label={"Recommended for you"} />

            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={recommendedList}
                renderItem={(itemData) => {
                    return (<ElongatedCard
                        restId={itemData.item.id}
                    />);
                }} />



            <Heading label={"Delicious biryani"} />

            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={biryaniList}
                renderItem={(itemData) => {
                    return (<ElongatedCard
                        restId={itemData.item.id}
                    />);
                }} />

        </View>
    );
};

const mapStateToProps = state => {
    return {
        recommendedList: state.data.Recommended,
        biryaniList: state.data.Biryani,
    };
};


export default connect(mapStateToProps)(HorizontalScrollView);




