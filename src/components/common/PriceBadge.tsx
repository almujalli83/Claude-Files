import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';

interface PriceBadgeProps {
  price: number;
  currency?: string;
  period?: string;
  originalPrice?: number;
  style?: ViewStyle;
}

export default function PriceBadge({
  price,
  currency = 'SAR',
  period,
  originalPrice,
  style,
}: PriceBadgeProps) {
  const hasDiscount = originalPrice !== undefined && originalPrice > price;
  const discountPercent = hasDiscount
    ? Math.round(((originalPrice! - price) / originalPrice!) * 100)
    : 0;

  return (
    <View style={[styles.container, style]}>
      <View style={styles.priceRow}>
        <Text style={styles.currency}>{currency}</Text>
        <Text style={styles.price}>{price.toLocaleString()}</Text>
        {period && <Text style={styles.period}>/{period}</Text>}
      </View>
      {hasDiscount && (
        <View style={styles.discountRow}>
          <Text style={styles.originalPrice}>
            {currency} {originalPrice!.toLocaleString()}
          </Text>
          <View style={styles.discountBadge}>
            <Text style={styles.discountText}>-{discountPercent}%</Text>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  currency: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1C1C1E',
    marginRight: 4,
  },
  price: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1C1C1E',
  },
  period: {
    fontSize: 13,
    color: '#8E8E93',
    marginLeft: 2,
  },
  discountRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  originalPrice: {
    fontSize: 13,
    color: '#8E8E93',
    textDecorationLine: 'line-through',
    marginRight: 8,
  },
  discountBadge: {
    backgroundColor: '#FF3B30',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
  },
  discountText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});
