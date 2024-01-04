import ApiClient from '@api';
import images from '@assets/images';
import SvgIcon from '@assets/svgs';
import CLoader from '@components/CLoader';
import CSafeAreaView from '@components/CSafeAreaView';
import IconSvg from '@components/IconSvg';
import InputForm from '@components/InputForm';
import { HEIGHT, WIDTH } from '@constants/constant';
import { useSignUp } from '@hooks/signUp';
import { useNavigation } from '@react-navigation/native';
import { useFormik } from 'formik';
import isEmpty from 'lodash/isEmpty';
import React, { FC, memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import styles from './styles';

const SignUp: FC = () => {
  const { i18n } = useTranslation();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();

  // const signUpHook = useSignUp();
  // const signUpLoading = signUpHook.loading;
  // const userProfile = signUpHook.userProfile;
  // const signUpFalse = signUpHook.loginFail;
  // const signUpData = signUpHook.data;

  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };

  const handleSignIn = (values: UserLogin) => {
    // dispatch(
    //   userLogin({
    //     params: values,
    //     callback: (data: any) => {
    //       if (!isEmpty(data)) {
    //         dispatch(setUserInfo(data));
    //         navigation.navigate('PrimaryNavigator');
    //       }
    //     },
    //   }),
    // );
  };

  const initialValues = __DEV__
    ? {
        emailOrPhoneNumber: '0396092987',
        password: '123456A',
      }
    : {
        emailOrPhoneNumber: '',
        password: '',
      };

  const { values, errors, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues,
    onSubmit: async () => {
      handleSignIn(values);
    },
    // validationSchema: validationPhoneNumberSchema,
    enableReinitialize: true,
  });

  const onSignUp = (data: UserProfileSuccess) => {
    // dispatch(setUserInfo(data));
    // navigation.navigate('PrimaryNavigator');
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
          <View
            style={{
              width: WIDTH,
              height: HEIGHT * 0.5,
            }}
          />
          <View
            style={{
              backgroundColor: 'white',
              width: WIDTH,
              height: HEIGHT * 0.5,
            }}
          />
        </View>
        <ScrollView style={styles.container}>
          <View style={styles.form}>
            <InputForm
              label={i18n.t('signIn:phoneNumber') as string}
              placeholder={i18n.t('signIn:phoneNumberPlaceholder') as string}
              value={values.emailOrPhoneNumber}
              onChangeText={handleChange('emailOrPhoneNumber')}
              onBlur={handleBlur('emailOrPhoneNumber')}
              error={errors.emailOrPhoneNumber}
            />
            <InputForm
              label={i18n.t('signIn:password') as string}
              placeholder={i18n.t('signIn:passwordPlaceholder') as string}
              value={values.password}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              error={errors.password}
              type="password"
            />
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>{i18n.t('signIn:forgotPassword')}</Text>
          </TouchableOpacity>
          {/* <MainButton title={i18n.t('signIn:signIn')} customButtonStyle={{ marginTop: 28 }} onPress={handleSubmit} /> */}
          <View style={styles.button}>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', marginTop: 16 }}>
              <Text style={styles.textBasic}>{i18n.t('signIn:doYouNotHaveAnAccount')}</Text>
              <TouchableOpacity onPress={handleSignUp}>
                <Text style={{ ...styles.buttonText, marginLeft: 4 }}>{i18n.t('signIn:registerNow')}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.or}>
            <View style={styles.line} />
            <Text style={styles.orText}>{i18n.t('signIn:or')}</Text>
            <View style={styles.line} />
          </View>
        </ScrollView>
      </ImageBackground>
    </CSafeAreaView>
  );
};

export default memo(SignUp);
