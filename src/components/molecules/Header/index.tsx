import Colors from '@constants/colors';
import {NavigationContext} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {IconButton} from 'react-native-paper';
import {styles} from './styles';

type Props = {
  withBackIcon?: boolean;
  withCloseIcon?: boolean;
  label?: string;
};

const Header = ({withBackIcon = true, withCloseIcon = false, label}: Props) => {
  const navigation: any = React.useContext(NavigationContext);

  return (
    <SafeAreaView>
      <View style={styles.headerComponent}>
        {withBackIcon ? (
          <IconButton
            icon={!withCloseIcon ? 'chevron-left' : 'close'}
            iconColor={Colors.primary.base}
            size={30}
            onPress={() => navigation.goBack()}
          />
        ) : null}

        {label ? (
          <Text
            style={[
              styles.labelTxt,
              {paddingHorizontal: !withBackIcon ? 16 : 0},
            ]}
            numberOfLines={2}>
            {label}
          </Text>
        ) : null}
      </View>
    </SafeAreaView>
  );
};

export {Header};
