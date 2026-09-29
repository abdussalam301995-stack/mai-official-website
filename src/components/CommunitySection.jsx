import { useState } from "react";







const CONTRACT_ADDRESS =



  "EQD5pWilwl9ypQ1JFxoDktsQl_LAALALnqHjZoxhx_2nET-r";







const TELEGRAM_NEWS = "https://t.me/MAI_News_Official";



const MINING_APP = "https://t.me/mai_accesstoken_bot";







const DEX_LINK =



  "https://app.tonkeeper.com/dapp/https%3A%2F%2Fdedust.io%2Fcoins%2FEQD5pWilwl9ypQ1JFxoDktsQl_LAALALnqHjZoxhx_2nET-r";







/*



  Add the official links here later.







  Example:



  const X_LINK = "https://x.com/your_account";



  const YOUTUBE_LINK = "https://youtube.com/@your_channel";



*/







const X_LINK = "";



const YOUTUBE_LINK = "";







function TelegramIcon() {



  return (



    <svg viewBox="0 0 48 48" aria-hidden="true">



      <path



        d="M39.5 9.5 33.8 37c-.4 2-1.7 2.5-3.4 1.5l-8.7-6.4-4.2 4c-.5.5-.9.9-1.8.9l.6-8.9 16.2-14.6c.7-.6-.2-1-1.1-.4L11.4 25.7l-8.6-2.7c-1.9-.6-1.9-1.9.4-2.8L36.8 7.3c1.6-.6 3 .4 2.7 2.2Z"



        fill="currentColor"



      />



    </svg>



  );



}







function MiningIcon() {



  return (



    <svg viewBox="0 0 48 48" aria-hidden="true">



      <path



        d="M15 12h18a5 5 0 0 1 5 5v14a5 5 0 0 1-5 5H15a5 5 0 0 1-5-5V17a5 5 0 0 1 5-5Z"



        fill="none"



        stroke="currentColor"



        strokeWidth="2"



      />







      <path



        d="M18 20h12M18 25h8M18 30h5"



        fill="none"



        stroke="currentColor"



        strokeWidth="2"



        strokeLinecap="round"



      />



    </svg>



  );



}







function XIcon() {



  return (



    <svg viewBox="0 0 48 48" aria-hidden="true">



      <path



        d="M12 10 34.5 38M35 10 13 38"



        fill="none"



        stroke="currentColor"



        strokeWidth="3"



        strokeLinecap="round"



      />



    </svg>



  );



}







function YouTubeIcon() {



  return (



    <svg viewBox="0 0 48 48" aria-hidden="true">



      <rect



        x="7"



        y="13"



        width="34"



        height="22"



        rx="7"



        fill="none"



        stroke="currentColor"



        strokeWidth="2"



      />







      <path d="m21 19 10 5-10 5Z" fill="currentColor" />



    </svg>



  );



}







function BuyIcon() {



  return (



    <svg viewBox="0 0 48 48" aria-hidden="true">



      <path



        d="M11 13h4l3.5 16h15l4-11H17"



        fill="none"



        stroke="currentColor"



        strokeWidth="2.3"



        strokeLinecap="round"



        strokeLinejoin="round"



      />







      <circle cx="21" cy="35" r="2" fill="currentColor" />



      <circle cx="32" cy="35" r="2" fill="currentColor" />



    </svg>



  );



}







function CopyIcon() {



  return (



    <svg viewBox="0 0 48 48" aria-hidden="true">



      <rect



        x="17"



        y="17"



        width="19"



        height="19"



        rx="4"



        fill="none"



        stroke="currentColor"



        strokeWidth="2"



      />







      <path



        d="M13 30H11a4 4 0 0 1-4-4V12a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4v1"



        fill="none"



        stroke="currentColor"



        strokeWidth="2"



      />



    </svg>



  );



}







function CommunitySection({ t }) {

  const c = t?.communityPage ?? {};



  const [copied, setCopied] = useState(false);







  const copyContractAddress = async () => {



    try {



      await navigator.clipboard.writeText(CONTRACT_ADDRESS);







      setCopied(true);







      window.setTimeout(() => {



        setCopied(false);



      }, 1800);



    } catch (error) {



      console.error("Unable to copy MAI contract address:", error);



    }



  };







  return (



    <section className="community" id="community">



      <div className="community__background" aria-hidden="true">



        <div className="community__grid"></div>







        <div className="community__glow community__glow--one"></div>



        <div className="community__glow community__glow--two"></div>







        <span className="community__particle community__particle--1"></span>



        <span className="community__particle community__particle--2"></span>



        <span className="community__particle community__particle--3"></span>



        <span className="community__particle community__particle--4"></span>



      </div>







      <div className="community__container">



        <div className="community__heading">



          <div className="community__eyebrow">



            <span></span>



            <strong>{c.badge ?? "OFFICIAL ECOSYSTEM"}</strong>



            <span></span>



          </div>







          <h2 className="community__title">
            {c.title ?? "Connect with the"}
            <span>{c.titleHighlight ?? " MAI Network."}</span>
          </h2>







          <p className="community__description">
            {c.description ??
              "Access official MAI Network channels, the mining ecosystem, verified token information and community platforms from one place."}
          </p>



        </div>







        <div className="community__layout">



          <div className="community__main">



            <div className="community__section-label">



              <span className="community__section-dot"></span>



              {c.channelsLabel ?? "OFFICIAL CHANNELS"}



            </div>







            <div className="community__cards">



              <a



                href={TELEGRAM_NEWS}



                target="_blank"



                rel="noopener noreferrer"



                className="community-card"



              >



                <span className="community-card__glow"></span>







                <div className="community-card__icon">



                  <TelegramIcon />



                </div>







                <div className="community-card__content">



                  <span className="community-card__label">



                    {c.officialNews ?? "OFFICIAL NEWS"}



                  </span>







                  <strong>Telegram</strong>







                  <small>{c.maiNews ?? "MAI Network News"}</small>



                </div>







                <span className="community-card__arrow">↗</span>



              </a>







              <a



                href={MINING_APP}



                target="_blank"



                rel="noopener noreferrer"



                className="community-card"



              >



                <span className="community-card__glow"></span>







                <div className="community-card__icon">



                  <MiningIcon />



                </div>







                <div className="community-card__content">



                  <span className="community-card__label">



                    {c.maiEcosystem ?? "MAI ECOSYSTEM"}



                  </span>







                  <strong>{c.miningMiniApp ?? "Mining Mini App"}</strong>







                  <small>{c.officialTelegramAccess ?? "Official Telegram Access"}</small>



                </div>







                <span className="community-card__arrow">↗</span>



              </a>







              {X_LINK ? (



                <a



                  href={X_LINK}



                  target="_blank"



                  rel="noopener noreferrer"



                  className="community-card"



                >



                  <span className="community-card__glow"></span>







                  <div className="community-card__icon">



                    <XIcon />



                  </div>







                  <div className="community-card__content">



                    <span className="community-card__label">



                      {c.social ?? "SOCIAL"}



                    </span>







                    <strong>X</strong>







                    <small>{c.officialMaiNetwork ?? "Official MAI Network"}</small>



                  </div>







                  <span className="community-card__arrow">↗</span>



                </a>



              ) : (



                <div className="community-card community-card--coming">



                  <span className="community-card__glow"></span>







                  <div className="community-card__icon">



                    <XIcon />



                  </div>







                  <div className="community-card__content">



                    <span className="community-card__label">



                      {c.social ?? "SOCIAL"}



                    </span>







                    <strong>X</strong>







                    <small>{c.officialAccountComingSoon ?? "Official account coming soon"}</small>



                  </div>







                  <span className="community-card__status">



                    {c.comingSoon ?? "COMING SOON"}



                  </span>



                </div>



              )}







              {YOUTUBE_LINK ? (



                <a



                  href={YOUTUBE_LINK}



                  target="_blank"



                  rel="noopener noreferrer"



                  className="community-card"



                >



                  <span className="community-card__glow"></span>







                  <div className="community-card__icon">



                    <YouTubeIcon />



                  </div>







                  <div className="community-card__content">



                    <span className="community-card__label">



                      {c.media ?? "MEDIA"}



                    </span>







                    <strong>YouTube</strong>







                    <small>{c.officialMaiNetwork ?? "Official MAI Network"}</small>



                  </div>







                  <span className="community-card__arrow">↗</span>



                </a>



              ) : (



                <div className="community-card community-card--coming">



                  <span className="community-card__glow"></span>







                  <div className="community-card__icon">



                    <YouTubeIcon />



                  </div>







                  <div className="community-card__content">



                    <span className="community-card__label">



                      {c.media ?? "MEDIA"}



                    </span>







                    <strong>YouTube</strong>







                    <small>{c.officialChannelComingSoon ?? "Official channel coming soon"}</small>



                  </div>







                  <span className="community-card__status">



                    {c.comingSoon ?? "COMING SOON"}



                  </span>



                </div>



              )}



            </div>



          </div>







          <aside className="community__access">



            <div className="community__access-top">



              <span className="community__access-dot"></span>



              {c.verifiedAccess ?? "VERIFIED ACCESS"}



            </div>







            <h3>
                {c.accessTitle ?? "Enter the MAI"}
                <span>{c.accessTitleHighlight ?? " Ecosystem."}</span>
              </h3>







            <p>
                {c.accessDescription ??
                  "Use official MAI Network access points to explore the mining ecosystem and MAI token market."}
              </p>







            <a



              href={MINING_APP}



              target="_blank"



              rel="noopener noreferrer"



              className="community__access-button community__access-button--primary"



            >



              <span>{c.launchMiningApp ?? "Launch Mining App"}</span>



              <span>↗</span>



            </a>







            <a



              href={DEX_LINK}



              target="_blank"



              rel="noopener noreferrer"



              className="community__access-button community__access-button--secondary"



            >



              <span className="community__access-button-icon">



                <BuyIcon />



              </span>







              <span>{c.buyMai ?? "Buy MAI"}</span>







              <span>↗</span>



            </a>







            <div className="community__verified">



              <span></span>



              <small>{c.officialAccessOnly ?? "Official MAI Network access only"}</small>



            </div>



          </aside>



        </div>







        <div className="community-contract">



          <div className="community-contract__info">



            <span className="community-contract__dot"></span>







            <div>



              <small>{c.officialMaiToken ?? "OFFICIAL MAI TOKEN"}</small>



              <strong>{c.contractAddress ?? "Contract Address"}</strong>



            </div>



          </div>







          <button



            type="button"



            className="community-contract__address"



            onClick={copyContractAddress}



            title={c.copyContractTitle ?? "Copy MAI contract address"}



          >



            <span>{CONTRACT_ADDRESS}</span>







            <span className="community-contract__copy">



              <CopyIcon />



              {copied ? c.copied ?? "Copied" : c.copy ?? "Copy"}



            </span>



          </button>



        </div>



      </div>



    </section>



  );



}







export default CommunitySection;