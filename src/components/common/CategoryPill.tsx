import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
} from 'react-native';

interface CategoryPillProps {
  label: string;
  icon?: string;
  selected?: boolean;
  onPress?: () => void;
  style?: ViewStyle;
}

export default function CategoryPill({
  label,
  icon,
  selected = false,
  onPress,
  style,
}: CategoryPillProps) {
  return (
    <TouchableOpacity
      style={[
        styles.pill,
        selected ? styles.pillSelected : styles.pillDefault,
        style,
      ]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      {icon && <Text style={styles.icon}>{icon}</Text>}
      <Text
        style={[
          styles.label,
          selected ? styles.labelSelected : styles.labelDefault,
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 100,
    borderWidth: 1.5,
  },
  pillDefault: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E5E5EA',
  },
  pillSelected: {
    backgroundColor: '#007A3D',
    borderColor: '#007A3D',
  },
  icon: {
    fontSize: 16,
    marginRight: 6,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
  },
  labelDefault: {
    color: '#1C1C1E',
  },
  labelSelected: {
    color: '#FFFFFF',
  },
});
