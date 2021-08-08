import React from "react";
import CaregiverItems from "./CaregiverItems";
function Caregiver() {
  return (
    <div
      id="caregiver"
      class="caregiver-column"
      style={{
        position: "absolute",
        width: "1380px",
        height: "380px",
        left: "0px",
        top: "1631px",
        background:
          "radial-gradient(80.11% 80.11% at 50% 19.89%, #F3F5F9 0%, rgba(243, 245, 249, 0.5) 100%), #FFFFFF",
      }}
    >
      <h2
        style={{
          padding: "30px",
          textAlign: "center",
          alignContent: "center",
          fontFamily: "Montserrat",
          fontWeight: "bold",
          fontSize: "30px",
          lineHeight: "37px",
        }}
      >
        How We Find <span>Best Caregiver</span> For You
      </h2>
      <section class="icons">
        <div class="container">
          <CaregiverItems
            imgUrl="data:image/png;base64,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"
            h3="1.Initial Consultation"
            p="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
        officia nobis quod eum. Magnam numquam sapiente possimus atque
        doloremque? Veniam."
          />

          <CaregiverItems
            imgUrl="https://s3-alpha-sig.figma.com/img/3640/122a/c5dd4f0fd1f382868c93be5ab9b12821?Expires=1627862400&Signature=a1R7-2eYq-BCtJHo1kUKim40e5idAmkfOX-uWKZ0dyq-DGf2p60uuEcPw6Jx38ffiNZNNawGoU8rrNA-YvWpQsGHbTHQA6~fTJhUXRyU7LxWtmVXsCSSQx~n0IpyanUJv7xrCeLmAsFl-z1ZJ-rxfANoBVMHmbdGWwM65aJzr~EDWxELtV2Plcne5Uassy1BSgXjtxghXm00Fm~cIbVSSP7yz-vJvMMcnBbUTbu201tB4fGL4v8MO9oEqV3fOYyk8oBXQsTxvP6RKfJYtb2yq0H1BgHIPGjG3Afgx5Np~2GW7fig5iwRR4Qh8UWdrBA~XJfocf8MkhcFstenaSm7qw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            alt="care"
            h3="2.Customized Care Plan"
            p="
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
            officia nobis quod eum. Magnam numquam sapiente possimus atque
            doloremque? Veniam."
          />
          <CaregiverItems
            imgUrl="https://s3-alpha-sig.figma.com/img/6719/a52a/129bdddb3ec46ab286cdf44f00600c64?Expires=1627862400&Signature=aeeBHObt7Fmq5eBlLxZlqL1NLGKgMrRsPLa-gbm8RkwfksdRR8UtXmRc1E~uatw99I39wTsX9WrOcK7fMIAhbmyegNBRqarTVWQ4cZ~ER7sC1NwdJuWq0gXGPkexMmr97aVZe35h~zZGgK03tZMAiS6tHvriNH87lhREVTiKu-5Ujsk29h4XuEnpnABpW3JZr8hTZ6IrrFXMRP~pqFNRX-fkUWYN~1-E8hO-Dfp2egbABdaksHOhYrayM9u2zEkpsq~hVWKyhexm0vMJQ0QXKX9jnVLNkfKzDh8gk68Rx-CXJUy1EtAIO6HDitD3EipQN79oTqGtPU083rUGsZL2IQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            alt="matching"
            h3="3.Caregiver Matching"
            p="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
        officia nobis quod eum. Magnam numquam sapiente possimus atque
        doloremque? Veniam."
          />

          <CaregiverItems
            imgUrl="https://www.kindpng.com/picc/m/466-4662343_icons8-flat-customer-support-orange-customer-care-icon.png"
            alt="support"
            h3="4.Ongoing Support & Supervision"
            p="
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
            officia nobis quod eum. Magnam numquam sapiente possimus atque
            doloremque? Veniam."
          />
        </div>
      </section>
    </div>
  );
}
export default Caregiver;
