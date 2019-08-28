package com.revature.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="Cart")
public class CartItem {
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="cart")
	@SequenceGenerator(name="cart", sequenceName="cart_seq", allocationSize=1)
	@Column(name="CartID")
	private int cartItemID;
	@ManyToOne
	@JoinColumn(name="OwnerID")
	private Human ownerID;
	@ManyToOne
	@JoinColumn(name="ItemID")
	private Item itemID;
	
	private int amount;

	public CartItem() {
		super();
		// TODO Auto-generated constructor stub
	}

	public CartItem(int cartItemID, Human ownerID, Item itemID, int amount) {
		super();
		this.cartItemID = cartItemID;
		this.ownerID = ownerID;
		this.itemID = itemID;
		this.amount = amount;
	}

	public int getCartItemID() {
		return cartItemID;
	}

	public void setCartItemID(int cartID) {
		this.cartItemID = cartID;
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
		return "Cart [cartID=" + cartItemID + ", ownerID=" + ownerID + ", itemID=" + itemID + ", amount=" + amount + "]";
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
		CartItem other = (CartItem) obj;
		if (amount != other.amount)
			return false;
		if (cartItemID != other.cartItemID)
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
