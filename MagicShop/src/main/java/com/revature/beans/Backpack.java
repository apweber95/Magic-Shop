package com.revature.beans;

public class Backpack {

	private int backpackID;
	private Human ownerID;
	private Item itemID;
	private int stock;

	public Backpack() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Backpack(int backpackID, Human ownerID, Item itemID, int stock) {
		super();
		this.backpackID = backpackID;
		this.ownerID = ownerID;
		this.itemID = itemID;
		this.stock = stock;
	}

	public int getBackpackID() {
		return backpackID;
	}

	public void setBackpackID(int backpackID) {
		this.backpackID = backpackID;
	}

	public Human getOwnerID() {
		return ownerID;
	}

	public void setOwnerID(Human ownerID) {
		this.ownerID = ownerID;
	}

	public Item getItemID() {
		return itemID;
	}

	public void setItemID(Item itemID) {
		this.itemID = itemID;
	}

	public int getStock() {
		return stock;
	}

	public void setStock(int stock) {
		this.stock = stock;
	}
	
	

	@Override
	public String toString() {
		return "Backpack [backpackID=" + backpackID + ", ownerID=" + ownerID + ", itemID=" + itemID + ", stock=" + stock
				+ "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + backpackID;
		result = prime * result + ((itemID == null) ? 0 : itemID.hashCode());
		result = prime * result + ((ownerID == null) ? 0 : ownerID.hashCode());
		result = prime * result + stock;
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
		Backpack other = (Backpack) obj;
		if (backpackID != other.backpackID)
			return false;
		if (itemID == null) {
			if (other.itemID != null)
				return false;
		} else if (!itemID.equals(other.itemID))
			return false;
		if (ownerID == null) {
			if (other.ownerID != null)
				return false;
		} else if (!ownerID.equals(other.ownerID))
			return false;
		if (stock != other.stock)
			return false;
		return true;
	}

}
