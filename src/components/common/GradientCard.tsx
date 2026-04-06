import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

interface GradientCardProps {
  title: string;
  subtitle?: string;
  imageUrl: string;
  onPress?: () => void;
  height?: number;
  children?: React.ReactNode;
  style?: ViewStyle;
}

export default function GradientCard({
  title,
  subtitle,
  imageUrl,
  onPress,
  height = 220,
  children,
  style,
}: GradientCardProps) {
  const content = (
    <ImageBackground
      source={{ uri: imageUrl }}
      style={[styles.background, { height }, style]}
      imageStyle={styles.image}
    >
      <View style={styles.overlay} />
      <View style={styles.content}>
        {children}
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
        {subtitle && (
          <Text style={styles.subtitle} numberOfLines={1}>
            {subtitle}
          </Text>
        )}
      </View>
    </ImageBackground>
  );

  if (onPress) {
    return (
      <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
        {content}
      </TouchableOpacity>
    );
  }

  return content;
}

const styles = StyleSheet.create({
  background: {
    borderRadius: 16,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  image: {
    borderRadius: 16,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    borderRadius: 16,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 15,
    color: 'rgba(255, 255, 255, 0.85)',
  },
});
