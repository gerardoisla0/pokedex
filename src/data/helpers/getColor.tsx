import ImageColors from "react-native-image-colors";

export const getColorFromImageUrl = async (imageUrl: string) => {

    const defaultColor = 'grey';
  
    const color = await ImageColors.getColors(imageUrl, {
        fallback: defaultColor
    });

    switch (color.platform) {
        case 'android':
            return color.dominant ?? defaultColor;
        case 'ios':
            return color.background ?? defaultColor;
        default:
            return defaultColor;
    }

}
