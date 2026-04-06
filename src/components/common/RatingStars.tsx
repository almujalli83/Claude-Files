import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';

interface RatingStarsProps {
  rating: number;
  maxRating?: number;
  showValue?: boolean;
  reviewCount?: number;
  size?: 'small' | 'medium' | 'large';
  style?: ViewStyle;
}

export default function RatingStars({
  rating,
  maxRating = 5,
  showValue = true,
  reviewCount,
  size = 'medium',
  style,
}: RatingStarsProps) {
  const sizeConfig = {
    small: { starSize: 12, fontSize: 12, gap: 2 },
    medium: { starSize: 16, fontSize: 14, gap: 3 },
    large: { starSize: 20, fontSize: 16, gap: 4 },
  };

  const { starSize, fontSize, gap } = sizeConfig[size];

  const stars = Array.from({ length: maxRating }, (_, i) => {
    const fillLevel = Math.min(Math.max(rating - i, 0), 1);
    if (fillLevel >= 0.75) return '\u2605'; // full star
    if (fillLevel >= 0.25) return '\u00BD'; // half star
    return '\u2606'; // empty star
  });

  return (
    <View style={[styles.container, style]}>
      <View style={[styles.starsRow, { gap }]}> 
        {stars.map((star, index) => (
          <Text
            key={index}
            style={[
              styles.star,
              { fontSize: starSize },
              star === '\u2606' ? styles.starEmpty : styles.starFilled,
            ]}
          >
            {star}
          </Text>
        ))}
      </View>
      {showValue && (
        <Text style={[styles.ratingValue, { fontSize }]}>
          {rating.toFixed(1)}
        </Text>
      )}
      {reviewCount !== undefined && (
        <Text style={[styles.reviewCount, { fontSize: fontSize - 1 }]}>
          ({reviewCount.toLocaleString()})
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {
    lineHeight: undefined,
  },
  starFilled: {
    color: '#FF9500',
  },
  starEmpty: {
    color: '#D1D1D6',
  },
  ratingValue: {
    fontWeight: '600',
    color: '#1C1C1E',
    marginLeft: 6,
  },
  reviewCount: {
    color: '#8E8E93',
    marginLeft: 4,
  },
});
