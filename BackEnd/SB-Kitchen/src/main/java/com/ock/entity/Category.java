package com.ock.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;

@Entity
public class Category {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ImageId")
	private Long imageId;

	@Column(name = "ImageName")
	private String imageName;

	@Column(name = "ImageType")
	private String imageType;

	@Lob
	@Column(name = "content", columnDefinition = "LONGBLOB")
	private byte[] content;

	public Long getImageId() {
		return imageId;
	}

	public void setImageId(Long imageId) {
		this.imageId = imageId;
	}

	public String getImageName() {
		return imageName;
	}

	public void setImageName(String imageName) {
		this.imageName = imageName;
	}

	public String getImageType() {
		return imageType;
	}

	public void setImageType(String imageType) {
		this.imageType = imageType;
	}

	public byte[] getContent() {
		return content;
	}

	public void setContent(byte[] content) {
		this.content = content;
	}

	public Category(Long imageId, String imageName, String imageType, byte[] content) {
		super();
		this.imageId = imageId;
		this.imageName = imageName;
		this.imageType = imageType;
		this.content = content;
	}

	public Category() {
		super();
		// TODO Auto-generated constructor stub
	}

}
