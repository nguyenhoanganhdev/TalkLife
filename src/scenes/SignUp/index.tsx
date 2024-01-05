import images from '@assets/images';
import CSafeAreaView from '@components/CSafeAreaView';
import InputForm from '@components/InputForm';
import { HEIGHT, WIDTH } from '@constants/constant';
import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native';
import { signUp } from '@redux/reqres/actions';
import { SignUpParams, SignUpSuccessPayload } from '@redux/reqres/types';
import { useFormik } from 'formik';
import isEmpty from 'lodash/isEmpty';
import { Icon, Image, Pressable } from 'native-base';
import React, { FC, memo, useEffect, useState } from 'react';
import { ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useDispatch } from 'react-redux';
import { validationSignUp } from './signUp.type';
import styles from './styles';

const SignUp: FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [checkAge, setCheckAge] = useState<boolean>(false);
  // const signUpHook = useSignUp();
  // const signUpLoading = signUpHook.loading;
  // const userProfile = signUpHook.userProfile;
  // const signUpFalse = signUpHook.loginFail;
  // const signUpData = signUpHook.data;

  const handleSignIn = (values: SignUpParams) => {
    console.log('handleSignIn', values);
    dispatch(
      signUp({
        params: values,
        callback: (data: SignUpSuccessPayload) => {
          if (!isEmpty(data)) {
            // dispatch(setUserInfo(data));
            navigation.navigate('Categories');
          }
        },
      }),
    );
  };

  const initialValues = __DEV__
    ? {
        firstName: 'Anh',
        lastName: 'Nguyen',
        email: 'anh@gmail.com',
        password: '123456A',
      }
    : {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      };

  const { values, errors, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues,
    onSubmit: async () => {
      handleSignIn(values);
    },
    validationSchema: validationSignUp,
    enableReinitialize: true,
  });

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
        source={images.SIGN_UP_BG}
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
        <View
          style={{
            width: WIDTH,
            height: HEIGHT * 0.3,
          }}
        />
        <ScrollView style={styles.container}>
          <View style={styles.h1Style}>
            <Text style={styles.h1}>{'Let’s get you started!'}</Text>
          </View>
          <View style={styles.form}>
            <InputForm
              label={'Your email'}
              placeholder={'Your email'}
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              errorMessage={errors.email}
              showErrorMessage
            />
            <InputForm
              label={'Your password'}
              placeholder={'Your password'}
              value={values.password}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              errorMessage={errors.password}
              type={showPassword ? 'text' : 'password'}
              showErrorMessage
              InputRightElement={
                <Pressable onPress={() => setShowPassword(!showPassword)}>
                  <Icon
                    as={<MaterialIcons name={showPassword ? 'visibility' : 'visibility-off'} />}
                    size={5}
                    mr="2"
                    color="muted.400"
                  />
                </Pressable>
              }
            />
          </View>
          <View style={styles.confirmAge}>
            <CheckBox
              disabled={false}
              value={checkAge}
              onValueChange={newValue => setCheckAge(newValue)}
              boxType="square"
            />
            <TouchableOpacity style={styles.confirmAgeView}>
              <Text style={styles.textCommon}>{'I am over 16 years of age'}</Text>
            </TouchableOpacity>
          </View>
          <View style={{ paddingVertical: 30 }}>
            <Text style={[styles.textCommon, { color: 'rgba(255, 255, 255, 0.50)' }]}>
              {'By clicking Sign Up, you are indicating that you have read and agree to the'}
              <Text style={[styles.textCommon, { color: '#647FFF' }]}>{' Terms of Service '}</Text>
              {'and'}
              <Text style={[styles.textCommon, { color: '#647FFF' }]}>{' Privacy Policy '}</Text>
            </Text>
          </View>
          <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => handleSubmit()}>
              <Text
                style={[
                  styles.textCommon,
                  {
                    fontSize: 16,
                    fontWeight: '500',
                  },
                ]}>
                {'Sign Up'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
              <View style={styles.buttonCircle}>
                <Icon as={<MaterialIcons name={'arrow-forward'} />} size={5} color="muted.400" />
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </CSafeAreaView>
  );
};

export default memo(SignUp);
