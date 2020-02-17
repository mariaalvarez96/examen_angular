export class Product {
        productId: number;
        productName: string;
        productCode: string;
        releaseDate: string;
        price: number;
        description: string;
        starRating: number;
        imageUrl: string;


}

export class NewProduct {
        constructor(
                public productId: number,
                public productName: string,
                public productCode: string,
                public releaseDate: string,
                public price: number,
                public description: string,
                public starRating: number,
                public imageUrl: string){};            
};

export function ProdutsToAJSON(data): Product[]{
            return data["productos"].records.map((val) => {
                    return {
                    productId:		        val[0],
                    productName:	        val[1],
                    productCode:	        val[2],
                    releaseDate:	        new Date(val[3]),
                    price:	                parseFloat(val[5]),
                    description:                val[4],
                    starRating:                 parseFloat(val[6]),
                    imageUrl:                   val[7]
                    }
            });               
  }