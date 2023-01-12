import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import { CONSUMER_URL,CONSUMER_KEY,CONSUMER_SECRET } from './setting'

export const woocommerce = new WooCommerceRestApi({
    url: CONSUMER_URL,
    consumerKey: CONSUMER_KEY,
    consumerSecret: CONSUMER_SECRET,
    version: "wc/v3",
    queryStringAuth: false ,
    axiosConfig: {
        headers: {
          "Content-Type": "application/json;charset=UTF-8"
        }
      }
  })