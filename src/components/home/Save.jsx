import { BestSellingCard } from "./SaveGrid";

export default function DiscountGrid() {
  return (
    <section className="mt-24">
      {/* Header */}

      {/* Cards */}
      <div className="flex overflow-x-auto pb-4 gap-4 snap-x hide-scrollbar sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 sm:pb-0">
        {/* CARD 1 */}
        <div className="min-w-[200px] snap-start">
          <BestSellingCard
            bg="bg-pink-50"
            bottomBg="#781846"
            title="Save"
            value="$29"
            icon="wb_sunny"
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuC6kpPvAI21INV3eXu66qqLCx2TCYOB7qPhyhKhrXIzEMaoueKSweWcnH_-bdFKLrp3DB8MINkIxLVEU9DpK0iZTQNCZtdd_akxAUAJpYlR4QikClmmgCNVl3Y7_U0oCh3e-q-5SzffmjzFnvEcEVqMR2kOiJEVzG9C3J47HrAVm_uZ7iw4gn4Ij62D7S_uVz-Wq78LmuZAj9tI47Gds9JiYILe4t6h4sPeDHGY_vM3ktn7aOuffnUvkTAY0RfRSgExav9vO_4Hfis"
          />
        </div>

        {/* CARD 2 */}
        <div className="min-w-[200px] snap-start">
          <BestSellingCard
            bg="bg-orange-50"
            bottomBg="#A34218"
            title="Discount"
            value="30%"
            icon="flare"
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuA5eGplh7bS2HkPh9tk5mdR8dGf03xsLjkJMg2np0Csn-q43X5bXqNWYcZzBLDRDKSlOIPfB4jv8FXD6Qlf8pbX20I9qO-1TC_8BZ3zOuNtYlFPsstiVwmmpqmrSnZeTocYxdneHKLLPs71LX3o3FZBOS_mRHwYyMLorH0CFbJyo8jRbwANmp6_JS6BWHgSZbJijPP_OfSMr3pOzR03Mi39An7EuZ039ZOYN6tDWlH-1JNFIMCzpn6JBGYI8eI1aZpWxEZBasjUSQE"
          />
        </div>

        {/* CARD 3 */}
        <div className="min-w-[200px] snap-start">
          <BestSellingCard
            bg="bg-blue-50"
            bottomBg="#0E4F8F"
            title="Up to"
            value="50%"
            icon="verified"
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuDJXKx5c6YOzhHewX4UI8121yZ9t7ErocT04Duo2Ar01aciV3LhG2x4w8BhUPdbHU6uWpOVdz89r98g9NSsT5sgdAd88tYjVw4uaM3G5S7TpeHHwcRqHGB1An0grospf63ABEkoGyq13yKJWOysMlrfiapYNiI1BQQrfZOrtSLH3Vu_Y4_IDr999IUHVZ9m4YrRxVDTpwwODF3f7FtTGPgXUs_HKoPw2UlazkwfzjhlJq1Xlq3fsUDH-EdAwdkksHZqxUhbeEcnMVo"
          />
        </div>

        {/* CARD 4 */}
        <div className="min-w-[200px] snap-start">
          <BestSellingCard
            bg="bg-purple-50"
            bottomBg="#4C1D95"
            title="Free"
            value="SHIP"
            icon="campaign"
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuDUUSLn_qj2InJ-LRyA3j1D78YfhwW6bhIpWPmCLUKL42Wzw22izt8ivmFCm1-qj5Ohy_4K3chcJWYFolQNy3-mgKZt1J5Sl9ujV0EXTCbYtFRVP9fDSAdMpvJt7iRUyDK5gFa-z3kmQPfZSctvr3K18COAZI3Va9hRZ2A3T49KzZIv2R7GG0FWFu0tijl6A5Ae0rtPj--K8AvPo__dark3O8Y-AhiARH2spfeBzc7JYU-u9SVWEBIBVKwakxQHOAwDSFKedAEQMao"
          />
        </div>
      </div>
    </section>
  );
}
