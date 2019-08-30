package com.revature.beans;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table (name="Transactions")
public class PurchaseTransaction {
	
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="transaction")
	@SequenceGenerator(name="transaction", sequenceName="transaction_seq", allocationSize=1)

	private int transactionID;
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "ownerID")
	private Human ownerID;
	@OneToOne
	private Item itemID;
	private int amount;

	public PurchaseTransaction() {
		super();
		// TODO Auto-generated constructor stub
	}

	public PurchaseTransaction(int transactionID, Human ownerID, Item itemID, int amount) {
		super();
		this.transactionID = transactionID;
		this.ownerID = ownerID;
		this.itemID = itemID;
		this.amount = amount;
	}

	public int getTransactionID() {
		return transactionID;
	}

	public void setTransactionID(int transactionID) {
		this.transactionID = transactionID;
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
		return "Transaction [transactionID=" + transactionID + ", ownerID=" + ownerID + ", itemID=" + itemID
				+ ", amount=" + amount + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + amount;
		result = prime * result + ((itemID == null) ? 0 : itemID.hashCode());
		result = prime * result + ((ownerID == null) ? 0 : ownerID.hashCode());
		result = prime * result + transactionID;
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
		PurchaseTransaction other = (PurchaseTransaction) obj;
		if (amount != other.amount)
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
		if (transactionID != other.transactionID)
			return false;
		return true;
	}

}
