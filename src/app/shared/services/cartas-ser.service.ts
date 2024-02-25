import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartasSerService {

  listaItems = [
    {
        "name": "Knight",
        "id": 26000000,
        "maxLevel": 14,
        "maxEvolutionLevel": 1,
        "elixirCost": 3,
        "iconUrls": {
            "medium": "https://api-assets.clashroyale.com/cards/300/jAj1Q5rclXxU9kVImGqSJxa4wEMfEhvwNQ_4jiGUuqg.png",
            "evolutionMedium": "https://api-assets.clashroyale.com/cardevolutions/300/jAj1Q5rclXxU9kVImGqSJxa4wEMfEhvwNQ_4jiGUuqg.png"
        },
        "rarity": "common"
    },
    {
        "name": "Archers",
        "id": 26000001,
        "maxLevel": 14,
        "maxEvolutionLevel": 1,
        "elixirCost": 3,
        "iconUrls": {
            "medium": "https://api-assets.clashroyale.com/cards/300/W4Hmp8MTSdXANN8KdblbtHwtsbt0o749BbxNqmJYfA8.png",
            "evolutionMedium": "https://api-assets.clashroyale.com/cardevolutions/300/W4Hmp8MTSdXANN8KdblbtHwtsbt0o749BbxNqmJYfA8.png"
        },
        "rarity": "common"
    },
    {
        "name": "Goblins",
        "id": 26000002,
        "maxLevel": 14,
        "elixirCost": 2,
        "iconUrls": {
            "medium": "https://api-assets.clashroyale.com/cards/300/X_DQUye_OaS3QN6VC9CPw05Fit7wvSm3XegXIXKP--0.png"
        },
        "rarity": "common"
    },
    {
        "name": "Giant",
        "id": 26000003,
        "maxLevel": 12,
        "elixirCost": 5,
        "iconUrls": {
            "medium": "https://api-assets.clashroyale.com/cards/300/Axr4ox5_b7edmLsoHxBX3vmgijAIibuF6RImTbqLlXE.png"
        },
        "rarity": "rare"
    },
    {
        "name": "P.E.K.K.A",
        "id": 26000004,
        "maxLevel": 9,
        "elixirCost": 7,
        "iconUrls": {
            "medium": "https://api-assets.clashroyale.com/cards/300/MlArURKhn_zWAZY-Xj1qIRKLVKquarG25BXDjUQajNs.png"
        },
        "rarity": "epic"
    },
    {
        "name": "Minions",
        "id": 26000005,
        "maxLevel": 14,
        "elixirCost": 3,
        "iconUrls": {
            "medium": "https://api-assets.clashroyale.com/cards/300/yHGpoEnmUWPGV_hBbhn-Kk-Bs838OjGzWzJJlQpQKQA.png"
        },
        "rarity": "common"
    },
    {
        "name": "Balloon",
        "id": 26000006,
        "maxLevel": 9,
        "elixirCost": 5,
        "iconUrls": {
            "medium": "https://api-assets.clashroyale.com/cards/300/qBipxLo-3hhCnPrApp2Nn3b2NgrSrvwzWytvREev0CY.png"
        },
        "rarity": "epic"
    },
    {
        "name": "Witch",
        "id": 26000007,
        "maxLevel": 9,
        "elixirCost": 5,
        "iconUrls": {
            "medium": "https://api-assets.clashroyale.com/cards/300/cfwk1vzehVyHC-uloEIH6NOI0hOdofCutR5PyhIgO6w.png"
        },
        "rarity": "epic"
    },
    {
        "name": "Barbarians",
        "id": 26000008,
        "maxLevel": 14,
        "maxEvolutionLevel": 1,
        "elixirCost": 5,
        "iconUrls": {
            "medium": "https://api-assets.clashroyale.com/cards/300/TvJsuu2S4yhyk1jVYUAQwdKOnW4U77KuWWOTPOWnwfI.png",
            "evolutionMedium": "https://api-assets.clashroyale.com/cardevolutions/300/TvJsuu2S4yhyk1jVYUAQwdKOnW4U77KuWWOTPOWnwfI.png"
        },
        "rarity": "common"
    },
    {
        "name": "Golem",
        "id": 26000009,
        "maxLevel": 9,
        "elixirCost": 8,
        "iconUrls": {
            "medium": "https://api-assets.clashroyale.com/cards/300/npdmCnET7jmVjJvjJQkFnNSNnDxYHDBigbvIAloFMds.png"
        },
        "rarity": "epic"
    },
    {
        "name": "Skeletons",
        "id": 26000010,
        "maxLevel": 14,
        "maxEvolutionLevel": 1,
        "elixirCost": 1,
        "iconUrls": {
            "medium": "https://api-assets.clashroyale.com/cards/300/oO7iKMU5m0cdxhYPZA3nWQiAUh2yoGgdThLWB1rVSec.png",
            "evolutionMedium": "https://api-assets.clashroyale.com/cardevolutions/300/oO7iKMU5m0cdxhYPZA3nWQiAUh2yoGgdThLWB1rVSec.png"
        },
        "rarity": "common"
    },
    {
        "name": "Valkyrie",
        "id": 26000011,
        "maxLevel": 12,
        "maxEvolutionLevel": 1,
        "elixirCost": 4,
        "iconUrls": {
            "medium": "https://api-assets.clashroyale.com/cards/300/0lIoYf3Y_plFTzo95zZL93JVxpfb3MMgFDDhgSDGU9A.png",
            "evolutionMedium": "https://api-assets.clashroyale.com/cardevolutions/300/0lIoYf3Y_plFTzo95zZL93JVxpfb3MMgFDDhgSDGU9A.png"
        },
        "rarity": "rare"
    },
    {
        "name": "Skeleton Army",
        "id": 26000012,
        "maxLevel": 9,
        "elixirCost": 3,
        "iconUrls": {
            "medium": "https://api-assets.clashroyale.com/cards/300/fAOToOi1pRy7svN2xQS6mDkhQw2pj9m_17FauaNqyl4.png"
        },
        "rarity": "epic"
    },
    {
        "name": "Bomber",
        "id": 26000013,
        "maxLevel": 14,
        "maxEvolutionLevel": 1,
        "elixirCost": 2,
        "iconUrls": {
            "medium": "https://api-assets.clashroyale.com/cards/300/12n1CesxKIcqVYntjxcF36EFA-ONw7Z-DoL0_rQrbdo.png",
            "evolutionMedium": "https://api-assets.clashroyale.com/cardevolutions/300/12n1CesxKIcqVYntjxcF36EFA-ONw7Z-DoL0_rQrbdo.png"
        },
        "rarity": "common"
    },
    {
        "name": "Musketeer",
        "id": 26000014,
        "maxLevel": 12,
        "elixirCost": 4,
        "iconUrls": {
            "medium": "https://api-assets.clashroyale.com/cards/300/Tex1C48UTq9FKtAX-3tzG0FJmc9jzncUZG3bb5Vf-Ds.png"
        },
        "rarity": "rare"
    },
    {
        "name": "Baby Dragon",
        "id": 26000015,
        "maxLevel": 9,
        "elixirCost": 4,
        "iconUrls": {
            "medium": "https://api-assets.clashroyale.com/cards/300/cjC9n4AvEZJ3urkVh-rwBkJ-aRSsydIMqSAV48hAih0.png"
        },
        "rarity": "epic"
    }
]
}
