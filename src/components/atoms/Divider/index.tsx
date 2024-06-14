import React, {FC} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

type Props = {text?: string};

const Divider: FC<Props> = ({text}) => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      {text ? <Text style={styles.text}>{text}</Text> : null}
      <View style={styles.line} />
    </View>
  );
};

export default Divider;
