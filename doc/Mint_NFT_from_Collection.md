# Mint NFTs from an Collection

1. To mint from a collection, use the command `/mint collection [name]` to mint from a certain collection. 

    You can directly type `/mint` and then press “Enter”, and then enter the collection name. 
    
    ![mint_nft.gif](../assets/Mint_nft/mint_nft.gif)
    
    ⚠️ The collection must be created in server. You can use `/listcollections` to check existing collections.
    
2. The bot will replied with a button to take you to the NEAR wallet. It will ask you to approve for a transaction which includes the price and gas fee. Approve this transaction, and once the NFT is successfully minted, the page will be redirected to this NFT item on Paras.

***

* There are four common ***errors*** you might encounter with failed minting.
    1. **Wrong collection name**
        
        This means you enter a wrong collection name. Please use `/listcollections` to check the name again.
        
    2. **You don't have the permission to mint.**
        
        This indicates that the collection is set as available only to member with certain roles. You may not mint from this collection without the required role.
        
    3. **Nothing left**
        
        This NFT collection is sold out.