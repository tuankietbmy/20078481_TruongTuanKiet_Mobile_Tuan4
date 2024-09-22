import React, { useState } from 'react';
import {Button, View, Text, TextInput, TouchableOpacity, StyleSheet, Image, CheckBox } from 'react-native';

export default function Screen03() {
  const [discountCode, setDiscountCode] = useState('');

  return (
    <View style={styles.container}>
      {/* Product Section */}
      <View style={styles.productContainer}>
        <Image
          source={require('../images.jpg')} // Replace with actual image URL
          style={styles.productImage}
        />
        <View style={styles.productDetails}>
          <Text style={styles.productTitle}>Nguyên hàm tích phân và ứng dụng</Text>
          <Text style={styles.productSubTitle}>Cung cấp bởi Tiki Trading</Text>
          <Text style={styles.productPrice}>141.800 ₫</Text>
          <View style={{width:10}}><Button/></View>
         
        </View>
      </View>

      {/* Discount Code Section */}
      <View style={styles.discountContainer}>
        <TextInput
          placeholder="Mã giảm giá"
          value={discountCode}
          onChangeText={(text) => setDiscountCode(text)}
          style={styles.discountInput}
        />
        <TouchableOpacity style={styles.applyButton}>
          <Text style={styles.applyButtonText}>Áp dụng</Text>
        </TouchableOpacity>
      </View>

      {/* Pricing Summary */}
      <View style={styles.priceSummary}>
        <Text style={styles.priceText}>Tạm tính</Text>
        <Text style={styles.priceAmount}>141.800 ₫</Text>
      </View>
      <View style={styles.priceSummary}>
        <Text style={styles.totalText}>Thành tiền</Text>
        <Text style={styles.totalAmount}>141.800 ₫</Text>
      </View>

      {/* Checkout Button */}
      <TouchableOpacity style={styles.checkoutButton}>
        <Text style={styles.checkoutButtonText}>TIẾN HÀNH ĐẶT HÀNG</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  productContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  productImage: {
    width: 40,
    height: 60,
    marginRight: 20,
  },
  productDetails: {
    justifyContent: 'space-around',
  },
  productTitle: {
    fontWeight: 'bold',
  },
  productSubTitle: {
    color: 'gray',
  },
  productPrice: {
    color: '#e74c3c',
    fontWeight: 'bold',
  },
  discountContainer: {
    height:40,
    flexDirection: 'row',
    marginBottom: 20,
  },
  discountInput: {
    flex: 2,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  applyButton: {
    flex: 1,
    backgroundColor: '#2980b9',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  applyButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  priceSummary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  priceText: {
    color: 'gray',
  },
  priceAmount: {
    color: 'black',
  },
  totalText: {
    fontWeight: 'bold',
  },
  totalAmount: {
    color: '#e74c3c',
    fontWeight: 'bold',
  },
  checkoutButton: {
    backgroundColor: '#e74c3c',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
