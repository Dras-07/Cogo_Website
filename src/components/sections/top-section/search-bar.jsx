import React from 'react';

import  './search.css';

const SearchBar = () => {
  return (
    <div className="white-box">
    <div className="search-container">
      <div className="icon-container">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" width="1em" height="1em" role="img" class="styles_whatsapp_icon__Vyo1M"><g fill="#73D081"><path class="ic-c-send_whatsapp_svg__ic_c_send_whatsapp" d="M1.05 6.946c0 1.048.275 2.071.798 2.973L1 13l3.167-.827a5.994 5.994 0 0 0 2.856.724h.002c3.293 0 5.974-2.668 5.975-5.946 0-1.59-.62-3.083-1.748-4.207A5.951 5.951 0 0 0 7.025 1C3.732 1 1.052 3.667 1.05 6.946Zm1.886 2.817-.118-.186a4.913 4.913 0 0 1-.76-2.63c.002-2.726 2.23-4.943 4.969-4.943a4.94 4.94 0 0 1 3.51 1.45 4.901 4.901 0 0 1 1.454 3.496c-.001 2.725-2.229 4.943-4.966 4.943h-.002a4.978 4.978 0 0 1-2.527-.69l-.182-.106-1.88.49.502-1.824Z"></path><path class="ic-c-send_whatsapp_svg__ic_c_send_whatsapp" d="M5.532 4.46c-.112-.248-.23-.253-.336-.257C5.11 4.199 5.01 4.2 4.91 4.2a.55.55 0 0 0-.398.185c-.137.15-.523.509-.523 1.24s.535 1.438.61 1.537c.075.1 1.033 1.648 2.55 2.243 1.261.496 1.518.397 1.792.372.273-.024.883-.36 1.007-.706.125-.347.125-.645.088-.707-.038-.062-.137-.099-.287-.173-.15-.075-.883-.434-1.02-.484-.137-.05-.236-.074-.336.075-.1.148-.385.483-.472.582-.087.1-.175.112-.324.038-.15-.075-.63-.232-1.2-.738a4.48 4.48 0 0 1-.831-1.03c-.087-.148-.01-.228.066-.302.067-.067.149-.174.224-.26.074-.088.099-.15.149-.249.05-.099.025-.186-.013-.26-.037-.074-.327-.81-.46-1.103"></path></g></svg>
      </div>
      <span className="country-code">+91</span>
      <div className="down-triangle">
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 14" width="1em" height="1em" role="img"><path class="ic-m-arrow_rotate_down_svg__ic_m_arrow_rotate_down" d="M1.989 4.052a.55.55 0 0 0-.286.449c0 .199-.084.109 2.518 2.716 1.488 1.492 2.501 2.489 2.557 2.519a.516.516 0 0 0 .444 0c.056-.03 1.069-1.027 2.557-2.519 2.606-2.612 2.518-2.516 2.518-2.719a.536.536 0 0 0-.285-.44c-.085-.044-.211-.045-5.017-.044-4.47 0-4.937.004-5.006.038" fill-rule="evenodd"></path></svg>
      </div>
      <input type="text" placeholder="WhatsApp Number" className="input-area" />
      <button className="get-started-button-section1">Get Started</button>
    </div>
    </div>
  );
};

export default SearchBar;
