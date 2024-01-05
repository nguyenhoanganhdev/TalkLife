import images from '@assets/images';
import CSafeAreaView from '@components/CSafeAreaView';
import { HEIGHT, WIDTH } from '@constants/constant';
import { useNavigation } from '@react-navigation/native';
import { CategoriesPayload } from '@redux/reqres/types';
import { Icon, Image } from 'native-base';
import React, { FC, memo, useEffect, useState } from 'react';
import { FlatList, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { CATEGORIES_DATA } from './mockData';
import styles from './styles';

const Categories: FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const navigation = useNavigation<any>();

  const [selectedItemIds, setSelectedItemIds] = useState<number[]>([]);

  const toggleSelection = (itemId: number) => {
    const isSelected = selectedItemIds.includes(itemId);
    if (isSelected) {
      setSelectedItemIds(selectedItemIds.filter(id => id !== itemId));
    } else {
      setSelectedItemIds([...selectedItemIds, itemId]);
    }
  };

  const gotoSignUp = () => {
    navigation.navigate('SignUp');
  };

  const renderItem = ({ item }: { item: CategoriesPayload }) => {
    const isSelected = selectedItemIds.includes(item.id);
    return (
      <TouchableOpacity onPress={() => toggleSelection(item.id)} style={{ flex: 1 }}>
        <LinearGradient
          colors={isSelected ? ['#8A32A9', '#8A00FF'] : ['transparent', 'transparent']}
          style={styles.item}>
          <Text style={styles.textCommon}>{item.name}</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    // const isEnableGetProfile = !!signUpData && !!signUpData.accessToken && !userProfile.email;
    // if (isEnableGetProfile) {
    //   ApiClient.defaults.headers.common['Authorization'] = `Bearer ${signUpData?.accessToken}`;
    //   dispatch(
    //     getUserInfo({
    //       callback: (data: any) => {
    //         if (!isEmpty(data)) {
    //           onSignUp(data);
    //         }
    //       },
    //     }),
    //   );
    // }
  }, []);

  return (
    <CSafeAreaView>
      <ImageBackground
        source={images.BG_CATEGORIES}
        resizeMode="cover"
        style={{ width: WIDTH, height: HEIGHT * 0.7, backgroundColor: 'black', flex: 1 }}>
        {/* {signUpLoading && <CLoader fullPage={true} />} */}
        <View
          style={{
            position: 'absolute',
            width: WIDTH,
            height: '100%',
          }}>
          <Image source={images.BG_LINEAR_GRADIENT} width={'100%'} height={'100%'} />
        </View>

        <View style={styles.container}>
          <View
            style={{
              height: HEIGHT * 0.25,
            }}>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 20,
              }}>
              <TouchableOpacity onPress={gotoSignUp}>
                <Icon as={<MaterialIcons name={'chevron-left'} />} size={5} color="muted.400" />
              </TouchableOpacity>
              <TouchableOpacity onPress={gotoSignUp}>
                <Text
                  style={[
                    styles.textCommon,
                    {
                      fontSize: 16,
                      fontWeight: '500',
                    },
                  ]}>
                  {'Done'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.h1Style}>
            <Text style={styles.h1}>{'Wellcome to Nexle Entrance Test'}</Text>
          </View>
          <View style={styles.confirmAge}>
            <Text style={styles.textCommon}>
              {'Please select categories what you would like to see on your feed. You can set this later on Filter.'}
            </Text>
          </View>
          <FlatList
            data={CATEGORIES_DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            numColumns={3} // Set the number of columns to 3
            contentContainerStyle={styles.flatListContainer}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </ImageBackground>
    </CSafeAreaView>
  );
};

export default memo(Categories);
