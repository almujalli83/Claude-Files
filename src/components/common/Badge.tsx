import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface BadgeProps {
  label: string;
  color?: string;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export default function Badge({
  label,
  color = '#FFFFFF',
  backgroundColor = '#007A3D',
  size = 'medium',
  style,
  textStyle,
}: BadgeProps) {
  const sizeStyles = {
    small: { paddingHorizontal: 6, paddingVertical: 2, fontSize: 10 },
    medium: { paddingHorizontal: 10, paddingVertical: 4, fontSize: 12 },
    large: { paddingHorizontal: 14, paddingVertical: 6, fontSize: 14 },
  };

  const { fontSize, ...paddingStyle } = sizeStyles[size];

  return (
    <View style={[styles.badge, { backgroundColor }, paddingStyle, style]}>
      <Text style={[styles.label, { color, fontSize }, textStyle]}>
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    borderRadius: 100,
    alignSelf: 'flex-start',
  },
  label: {
    fontWeight: '600',
  },
});
