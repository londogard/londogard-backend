App: Wedding

---

Make sure to split up Wedding & Giftery clearly.

=== General ===  
UserAuth via User (old table)

=== Wedding ===  
WeddingInformation:
- id: PrimaryKey
- userId: ForeginKey
- markdownInfo: String
- date: String

Timeline:
- id: PrimaryKey
- wedding: ForeignKey
- time: String (datestamp?)
- markdownText: String

=== Giftery ===  
GifteryList:
- id: PrimaryKey
- userId: ForeignKey
- title: String
- description: String (MD)

Gift:
- id: PrimaryKey
- title: String
- description: String
- checkable: Boolean
- checked: Boolean

GiftCheck:
- giftId: ForeignKey
- userId: ForeignKey
- id: PrimaryKey