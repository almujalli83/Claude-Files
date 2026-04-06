import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  ViewStyle,
  TextStyle,
} from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export default function Button({
  title,
  onPress,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  style,
  textStyle,
}: ButtonProps) {
  const variantStyles = {
    primary: {
      container: { backgroundColor: '#007A3D' },
      text: { color: '#FFFFFF' },
    },
    secondary: {
      container: { backgroundColor: '#F2F2F7' },
      text: { color: '#007A3D' },
    },
    outline: {
      container: { backgroundColor: 'transparent', borderWidth: 1.5, borderColor: '#007A3D' },
      text: { color: '#007A3D' },
    },
    ghost: {
      container: { backgroundColor: 'transparent' },
      text: { color: '#007A3D' },
    },
  };

  const sizeStyles = {
    small: { paddingHorizontal: 16, paddingVertical: 8, fontSize: 14 },
    medium: { paddingHorizontal: 24, paddingVertical: 12, fontSize: 16 },
    large: { paddingHorizontal: 32, paddingVertical: 16, fontSize: 18 },
  };

  const { fontSize, ...paddingStyle } = sizeStyles[size];
  const currentVariant = variantStyles[variant];

  return (
    <TouchableOpacity
      style={[
        styles.button,
        currentVariant.container,
        paddingStyle,
        disabled && styles.disabled,
        style,
      ]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.7}
    >
      {loading ? (
        <ActivityIndicator
          color={variant === 'primary' ? '#FFFFFF' : '#007A3D'}
          size="small"
        />
      ) : (
        <Text
          style={[
            styles.text,
            currentVariant.text,
            { fontSize },
            textStyle,
          ]}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: '600',
  },
  disabled: {
    opacity: 0.5,
  },
});
