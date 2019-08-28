package com.revature.beans;

public class Item {

//	ItemID INT PRIMARY KEY,
//    Name VARCHAR(30),
//    ShelfPrice INT,
//    Description VARCHAR(2000),
//    Rarity VARCHAR(20),
//    Image VARCHAR(200)

	private int itemID;
	private String name;
	private int shelfPrice;
	private String description;
	private String rarity;
	private String image;

	public Item() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Item(int itemID, String name, int shelfPrice, String description, String rarity, String image) {
		super();
		this.itemID = itemID;
		this.name = name;
		this.shelfPrice = shelfPrice;
		this.description = description;
		this.rarity = rarity;
		this.image = image;
	}

	public int getItemID() {
		return itemID;
	}

	public void setItemID(int itemID) {
		this.itemID = itemID;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getShelfPrice() {
		return shelfPrice;
	}

	public void setShelfPrice(int shelfPrice) {
		this.shelfPrice = shelfPrice;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getRarity() {
		return rarity;
	}

	public void setRarity(String rarity) {
		this.rarity = rarity;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	@Override
	public String toString() {
		return "Item [itemID=" + itemID + ", name=" + name + ", shelfPrice=" + shelfPrice + ", description="
				+ description + ", rarity=" + rarity + ", image=" + image + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((description == null) ? 0 : description.hashCode());
		result = prime * result + ((image == null) ? 0 : image.hashCode());
		result = prime * result + itemID;
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		result = prime * result + ((rarity == null) ? 0 : rarity.hashCode());
		result = prime * result + shelfPrice;
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Item other = (Item) obj;
		if (description == null) {
			if (other.description != null)
				return false;
		} else if (!description.equals(other.description))
			return false;
		if (image == null) {
			if (other.image != null)
				return false;
		} else if (!image.equals(other.image))
			return false;
		if (itemID != other.itemID)
			return false;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		if (rarity == null) {
			if (other.rarity != null)
				return false;
		} else if (!rarity.equals(other.rarity))
			return false;
		if (shelfPrice != other.shelfPrice)
			return false;
		return true;
	}

}
