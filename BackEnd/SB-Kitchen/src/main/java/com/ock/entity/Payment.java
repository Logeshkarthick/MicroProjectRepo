package com.ock.entity;
import jakarta.persistence.*;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Payment {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int PaymentId;
	private String Amount;
	private String Date;
	private String paymentNumber;
	private String paymentAddress;

	@ManyToOne
	@JoinColumn(name = "RegisterId")
	private Register register;

	public int getPaymentId() {
		return PaymentId;
	}

	public void setPaymentId(int paymentId) {
		PaymentId = paymentId;
	}

	public String getAmount() {
		return Amount;
	}

	public void setAmount(String amount) {
		Amount = amount;
	}

	public String getDate() {
		return Date;
	}

	public void setDate(String date) {
		Date = date;
	}

	public String getPaymentNumber() {
		return paymentNumber;
	}

	public void setPaymentNumber(String paymentNumber) {
		this.paymentNumber = paymentNumber;
	}

	public String getPaymentAddress() {
		return paymentAddress;
	}

	public void setPaymentAddress(String paymentAddress) {
		this.paymentAddress = paymentAddress;
	}

	public Register getRegister() {
		return register;
	}

	public void setRegister(Register register) {
		this.register = register;
	}

	public Payment(int paymentId, String amount, String date, String paymentNumber, String paymentAddress,
			Register register) {
		super();
		PaymentId = paymentId;
		Amount = amount;
		Date = date;
		this.paymentNumber = paymentNumber;
		this.paymentAddress = paymentAddress;
		this.register = register;
	}

	public Payment() {
		super();
		// TODO Auto-generated constructor stub
	}

	
	
}
