import { ImageBackground, Text, TouchableOpacity, View } from 'react-native'

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
import { BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree'

import blurBg from './src/assets/bg-blur.png'
import Stripes from './src/assets/stripes.svg'
import { styled } from 'nativewind'
import NLWLogo from './src/assets/nlw-spacetime-logo.svg'
import { StatusBar } from 'expo-status-bar'

const StyledStripes = styled(Stripes)

export default function App() {
  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold,
  })
  if (!hasLoadedFonts) {
    return null
  }
  return (
    <ImageBackground
      source={blurBg}
      className="flex-1 bg-gray-900 relative px-8 py-10"
      imageStyle={{ position: 'absolute', left: '-150%' }}
    >
      <StyledStripes className="absolute left-2" />
      <View className="flex-1 items-center justify-center gap-6">
        <NLWLogo />
        <View className="space-y-2">
          <Text className="text-center font-title text-2xl leading-tight text-gray-50">
            sua cápsula do tempo
          </Text>
          <Text className="text-center font-body text-base leading-relaxed text-gray-100">
            Colecione momentos marcantes com sua jornada e compartilhe (se
            quiser) com o mundo
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.75}
          className="rounded-full bg-green-500 px-5 py-3"
        >
          <Text className="font-alt text-sm uppercase text-black">
            cadastrar lembranças
          </Text>
        </TouchableOpacity>
      </View>
      <Text className="text-center font-body leading-relaxed text-gray-200 text-sm">
        Feito com 💜 e carinho no NLW da RockeatSeat
      </Text>

      <StatusBar style="light" translucent />
    </ImageBackground>
  )
}
