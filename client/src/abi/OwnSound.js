export const OWNSOUNDABI = [
  {
    inputs: [
      {
        internalType: "address",
        name: "musicxTokenAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "protocolFeeAddress",
        type: "address",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "creator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "CreatorPayoutWithdrawn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newCreator",
        type: "address",
      },
    ],
    name: "FullRoyaltyBought",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "creator",
        type: "address",
      },
    ],
    name: "NFTMinted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "renter",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },
    ],
    name: "NFTRented",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "rentBaseAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "rentDuration",
        type: "uint256",
      },
    ],
    name: "RentInfoSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "creator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "RoyaltyPaid",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "id", type: "uint256" },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "owner", type: "address" }],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
    name: "buyFullRoyalty",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          { internalType: "uint256", name: "basePrice", type: "uint256" },
          {
            internalType: "bool",
            name: "fullRoyaltyAllowed",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "fullRoyaltyBuyoutPrice",
            type: "uint256",
          },
          { internalType: "string", name: "title", type: "string" },
          { internalType: "string", name: "description", type: "string" },
          { internalType: "string", name: "coverImage", type: "string" },
          {
            internalType: "string",
            name: "mp3FileLocationId",
            type: "string",
          },
          {
            internalType: "bool",
            name: "isRentingAllowed",
            type: "bool",
          },
          { internalType: "uint256", name: "supply", type: "uint256" },
          {
            internalType: "uint256",
            name: "royaltyPercentage",
            type: "uint256",
          },
        ],
        internalType: "struct OwnSoundNFS.CreateNFTParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "createNFT",
    outputs: [{ internalType: "uint256", name: "newTokenId", type: "uint256" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "creatorPayouts",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllTokensInfo",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "tokenId", type: "uint256" },
          {
            components: [
              {
                internalType: "uint256",
                name: "basePrice",
                type: "uint256",
              },
              {
                internalType: "bool",
                name: "fullRoyaltyAllowed",
                type: "bool",
              },
              {
                internalType: "uint256",
                name: "fullRoyaltyBuyoutPrice",
                type: "uint256",
              },
              { internalType: "string", name: "title", type: "string" },
              {
                internalType: "string",
                name: "description",
                type: "string",
              },
              {
                internalType: "string",
                name: "coverImage",
                type: "string",
              },
              {
                internalType: "string",
                name: "mp3FileLocationId",
                type: "string",
              },
              {
                internalType: "bool",
                name: "isRentingAllowed",
                type: "bool",
              },
              {
                internalType: "uint256",
                name: "supply",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "royaltyPercentage",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "creator",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "remainingSupply",
                type: "uint256",
              },
            ],
            internalType: "struct OwnSoundNFS.NFTMetadata",
            name: "metadata",
            type: "tuple",
          },
          { internalType: "address", name: "creator", type: "address" },
        ],
        internalType: "struct OwnSoundNFS.TokenInfo[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "getApproved",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
    name: "getNFTMetadata",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "basePrice", type: "uint256" },
          {
            internalType: "bool",
            name: "fullRoyaltyAllowed",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "fullRoyaltyBuyoutPrice",
            type: "uint256",
          },
          { internalType: "string", name: "title", type: "string" },
          { internalType: "string", name: "description", type: "string" },
          { internalType: "string", name: "coverImage", type: "string" },
          {
            internalType: "string",
            name: "mp3FileLocationId",
            type: "string",
          },
          {
            internalType: "bool",
            name: "isRentingAllowed",
            type: "bool",
          },
          { internalType: "uint256", name: "supply", type: "uint256" },
          {
            internalType: "uint256",
            name: "royaltyPercentage",
            type: "uint256",
          },
          { internalType: "address", name: "creator", type: "address" },
          {
            internalType: "uint256",
            name: "remainingSupply",
            type: "uint256",
          },
        ],
        internalType: "struct OwnSoundNFS.NFTMetadata",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
    name: "getRentInfo",
    outputs: [
      {
        components: [
          { internalType: "address", name: "renter", type: "address" },
          {
            internalType: "uint256",
            name: "rentBaseAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "rentDuration",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "rentEndTime",
            type: "uint256",
          },
        ],
        internalType: "struct OwnSoundNFS.RentInfo",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getRentableTokens",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "tokenId", type: "uint256" },
          {
            components: [
              {
                internalType: "uint256",
                name: "basePrice",
                type: "uint256",
              },
              {
                internalType: "bool",
                name: "fullRoyaltyAllowed",
                type: "bool",
              },
              {
                internalType: "uint256",
                name: "fullRoyaltyBuyoutPrice",
                type: "uint256",
              },
              { internalType: "string", name: "title", type: "string" },
              {
                internalType: "string",
                name: "description",
                type: "string",
              },
              {
                internalType: "string",
                name: "coverImage",
                type: "string",
              },
              {
                internalType: "string",
                name: "mp3FileLocationId",
                type: "string",
              },
              {
                internalType: "bool",
                name: "isRentingAllowed",
                type: "bool",
              },
              {
                internalType: "uint256",
                name: "supply",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "royaltyPercentage",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "creator",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "remainingSupply",
                type: "uint256",
              },
            ],
            internalType: "struct OwnSoundNFS.NFTMetadata",
            name: "metadata",
            type: "tuple",
          },
          {
            internalType: "uint256",
            name: "rentBaseAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "rentDuration",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "currentOwner",
            type: "address",
          },
        ],
        internalType: "struct OwnSoundNFS.RentableTokenInfo[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_wallet", type: "address" }],
    name: "getWalletTokensWithMetadata",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "tokenId", type: "uint256" },
          {
            components: [
              {
                internalType: "uint256",
                name: "basePrice",
                type: "uint256",
              },
              {
                internalType: "bool",
                name: "fullRoyaltyAllowed",
                type: "bool",
              },
              {
                internalType: "uint256",
                name: "fullRoyaltyBuyoutPrice",
                type: "uint256",
              },
              { internalType: "string", name: "title", type: "string" },
              {
                internalType: "string",
                name: "description",
                type: "string",
              },
              {
                internalType: "string",
                name: "coverImage",
                type: "string",
              },
              {
                internalType: "string",
                name: "mp3FileLocationId",
                type: "string",
              },
              {
                internalType: "bool",
                name: "isRentingAllowed",
                type: "bool",
              },
              {
                internalType: "uint256",
                name: "supply",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "royaltyPercentage",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "creator",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "remainingSupply",
                type: "uint256",
              },
            ],
            internalType: "struct OwnSoundNFS.NFTMetadata",
            name: "metadata",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "address",
                name: "renter",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "rentBaseAmount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "rentDuration",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "rentEndTime",
                type: "uint256",
              },
            ],
            internalType: "struct OwnSoundNFS.RentInfo",
            name: "rentInfo",
            type: "tuple",
          },
        ],
        internalType: "struct OwnSoundNFS.WalletTokenInfo[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "", type: "address" },
      { internalType: "address", name: "", type: "address" },
    ],
    name: "isApprovedForAll",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
    name: "mintNFT",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "nftMetadata",
    outputs: [
      { internalType: "uint256", name: "basePrice", type: "uint256" },
      { internalType: "bool", name: "fullRoyaltyAllowed", type: "bool" },
      {
        internalType: "uint256",
        name: "fullRoyaltyBuyoutPrice",
        type: "uint256",
      },
      { internalType: "string", name: "title", type: "string" },
      { internalType: "string", name: "description", type: "string" },
      { internalType: "string", name: "coverImage", type: "string" },
      {
        internalType: "string",
        name: "mp3FileLocationId",
        type: "string",
      },
      { internalType: "bool", name: "isRentingAllowed", type: "bool" },
      { internalType: "uint256", name: "supply", type: "uint256" },
      {
        internalType: "uint256",
        name: "royaltyPercentage",
        type: "uint256",
      },
      { internalType: "address", name: "creator", type: "address" },
      {
        internalType: "uint256",
        name: "remainingSupply",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "id", type: "uint256" }],
    name: "ownerOf",
    outputs: [{ internalType: "address", name: "owner", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "rentInfo",
    outputs: [
      { internalType: "address", name: "renter", type: "address" },
      {
        internalType: "uint256",
        name: "rentBaseAmount",
        type: "uint256",
      },
      { internalType: "uint256", name: "rentDuration", type: "uint256" },
      { internalType: "uint256", name: "rentEndTime", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
    name: "rentNFT",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "id", type: "uint256" },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "id", type: "uint256" },
      { internalType: "bytes", name: "data", type: "bytes" },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "operator", type: "address" },
      { internalType: "bool", name: "approved", type: "bool" },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "tokenId", type: "uint256" },
      {
        internalType: "uint256",
        name: "rentBaseAmount",
        type: "uint256",
      },
      { internalType: "uint256", name: "rentDuration", type: "uint256" },
    ],
    name: "setRentInfo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes4", name: "interfaceId", type: "bytes4" }],
    name: "supportsInterface",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "id", type: "uint256" }],
    name: "tokenURI",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "id", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawCreatorPayout",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
