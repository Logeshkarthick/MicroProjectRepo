package com.ock.entity;



import java.util.List;

import jakarta.persistence.*;

@Entity
public class Items {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int itemId;
	private String itemName;
	private  String  itemdescription;
	@Lob
	@Column(columnDefinition = "LONGBLOB")
	private byte[] image;
	
	private double price;
	private String  pieces;
	private String imageDesc;
	private String serves;
	public int getItemId() {
		return itemId;
	}
	public void setItemId(int itemId) {
		this.itemId = itemId;
	}
	public String getItemName() {
		return itemName;
	}
	public void setItemName(String itemName) {
		this.itemName = itemName;
	}
	public String getItemdescription() {
		return itemdescription;
	}
	public void setItemdescription(String itemdescription) {
		this.itemdescription = itemdescription;
	}
	public byte[] getImage() {
		return image;
	}
	public void setImage(byte[] image) {
		this.image = image;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public String getPieces() {
		return pieces;
	}
	public void setPieces(String pieces) {
		this.pieces = pieces;
	}
	public String getImageDesc() {
		return imageDesc;
	}
	public void setImageDesc(String imageDesc) {
		this.imageDesc = imageDesc;
	}
	public String getServes() {
		return serves;
	}
	public void setServes(String serves) {
		this.serves = serves;
	}
	public Items(int itemId, String itemName, String itemdescription, byte[] image, double price, String pieces,
			String imageDesc, String serves) {
		super();
		this.itemId = itemId;
		this.itemName = itemName;
		this.itemdescription = itemdescription;
		this.image = image;
		this.price = price;
		this.pieces = pieces;
		this.imageDesc = imageDesc;
		this.serves = serves;
	}
	public Items() {
		super();
		// TODO Auto-generated constructor stub
	}}

	
	
	


	
