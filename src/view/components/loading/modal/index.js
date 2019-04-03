import React from 'react';
import { View, Modal, ActivityIndicator } from 'react-native';

import style from './style';

const LoaderModal = props => {
    const {
        loading,
    } = props;

    return (
        <Modal
            transparent={true}
            animationType={'none'}
            visible={loading}>
            <View style={style.modalBackground}>
                <View style={style.activityIndicatorWrapper}>
                    <ActivityIndicator
                        animating={loading} />
                </View>
            </View>
        </Modal>
    )
};

export default LoaderModal;