package com.revature.beans;

public class Cart {

	private int cartID;
	private Human ownerID;
	private Item itemID;
	private int amount;

	public Cart() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Cart(int cartID, Human ownerID, Item itemID, int amount) {
		super();
		this.cartID = cartID;
		this.ownerID = ownerID;
		this.itemID = itemID;
		this.amount = amount;
	}

	public int getCartID() {
		return cartID;
	}

	public void setCartID(int cartID) {
		this.cartID = cartID;
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

	public int getAmount() {
		return amount;
	}

	public void setAmount(int amount) {
		this.amount = amount;
	}

	@Override
	public String toString() {
		return "Cart [cartID=" + cartID + ", ownerID=" + ownerID + ", itemID=" + itemID + ", amount=" + amount + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + amount;
		result = prime * result + cartID;
		result = prime * result + ((itemID == null) ? 0 : itemID.hashCode());
		result = prime * result + ((ownerID == null) ? 0 : ownerID.hashCode());
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
		Cart other = (Cart) obj;
		if (amount != other.amount)
			return false;
		if (cartID != other.cartID)
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
		return true;
	}

}
