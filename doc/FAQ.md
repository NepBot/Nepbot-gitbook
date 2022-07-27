# FAQ

- **What does Nepbot do?**
    
    Nepbot is a Discord bot for token-based community management. It can verify a user’s token holdings on Discord; set token-gated rules for server roles; and automatically assign verified accounts with roles. Our mission is to facilitate token-based community management across the Near ecosystem, and onboard more people to Near through token-gated experiences.
    
- **How to invite Nepbot to my Discord server?**
    
    Invite Nepbot to your discord via this link: [https://discord.com/oauth2/authorize?client_id=958997413803196476&permissions=8&scope=bot](https://discord.com/oauth2/authorize?client_id=958997413803196476&permissions=8&scope=bot)
    
- **What can I do with Roles?**
    
    Please check this article [Role Management 101](https://support.discord.com/hc/en-us/articles/214836687-Role-Management-101) for more info.
    
- **How do I set up a private server?**
    
    Please check this articles *[Setting Up Permissions FAQ](https://support.discord.com/hc/en-us/articles/206029707-Setting-Up-Permissions-FAQ#h_01FFTVYQ38W9TVCTM6YZHZXFFA)*
    
- **What is a Near Wallet?**
    
    NEAR Wallet is an in-browser, web-based wallet for creating and interacting with NEAR accounts. For more info, please check: [https://docs.near.org/docs/tools/near-wallet#:~:text=NEAR Wallet is an in,with their own account IDs](https://docs.near.org/docs/tools/near-wallet#:~:text=NEAR%20Wallet%20is%20an%20in,with%20their%20own%20account%20IDs).
    

- **How to create a Near wallet?**
    
    Go to [https://wallet.near.org/](https://wallet.near.org/) and create a new account with a human readable account ID. Remember to keep your seedphrase safe! For details, please check:
    
    [https://nearhelp.zendesk.com/hc/en-us/articles/1500002248242-Creating-a-NEAR-Wallet-account](https://nearhelp.zendesk.com/hc/en-us/articles/1500002248242-Creating-a-NEAR-Wallet-account)
    
- **Why do I need to pay gas fee when setting rules?**
    
    Because the rules in different servers are saved in a smart contract on Near protocol.
    Contract: [https://explorer.near.org/accounts/app.nepbot.near](https://explorer.near.org/accounts/app.nepbot.near)
    
- **Does Nepbot support Sender wallets?**

    Yes, it does. You can get verified by connecting with your Sender Wallet as well.

- **Can I verify with a ledger/cold wallet?**
    
    Yes, you can. When you use nepbot to verify, the link will take you to your NEAR wallet, and you can use ledger to activate your NEAR account.
    

- **Can I set several rules to the same role?**
    
    Yes, you can. When more than one rules are added for a single role, members will be assigned with role if they fulfill either of the rules.
    

- **Will I lose the roles if I sell/transfer the tokens/NFTs or unbond my staking on the Octopus Network?**
    
    Yes. Nepbot will constantly check the verified wallets to make sure the roles are updated in time.
    

- **If someone sells/moves the NFT how long will it take before their role is removed?**
    
    Usually within minutes, depending on the RPC speed.
    
- **Can I link to multiple NEAR wallets with Nepbot?**
    
    Currently no. WIP. 
    
    You can use /verify to go to the verfication page, and click on “Disconnect”, then verify again with another wallet. 
    
- **Except server owneer, can other admins add rules for roles?**
    
    No, only the server owner can add rules. 
    
- **How can I check if I’m verified or which account I’ve connected to?**
    
    Use `/verify` and go to the verification page. You will see a green check and the connected wallet address there if you’re already verified.
    
- **Can I change the channel name for #nepbot-join or the private channel for admins?**
    
    Yes, you can and it won’t affect the use of Nepbot.
    
- **Can I change the channel name for #nepbot-join or the private channel for admins?**
    
    Yes, you can and it won’t affect the use of Nepbot.
    
- **Can I use Nepbot to verify music NFTs?**
    
    Yes of course! :)
    
- **Can I change the properties of my NFT after I created it?**
    
    No, you can’t. :( 
    Please make sure the the properties are correct before confirming the creation.