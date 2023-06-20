import React from "react";
import { Bottom, Top, Wrapper } from "./PricingCard.Styles";

const PricingCard = ({ href, title, subText, price, description }) => {
  return (
    <Wrapper href={href}>
      <Top className="top">
        <div>
          <div className="title">{title}</div>
          <div className="subText">{subText}</div>
        </div>
        <div className="price">{price}</div>
      </Top>
      <Bottom className="bottom">
        <div className="pair">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.67 -9.15527e-05H14.34C17.73 -9.15527e-05 20 2.37991 20 5.91991V14.0909C20 17.6199 17.73 19.9999 14.34 19.9999H5.67C2.28 19.9999 0 17.6199 0 14.0909V5.91991C0 2.37991 2.28 -9.15527e-05 5.67 -9.15527e-05ZM9.43 12.9899L14.18 8.23991C14.52 7.89991 14.52 7.34991 14.18 6.99991C13.84 6.65991 13.28 6.65991 12.94 6.99991L8.81 11.1299L7.06 9.37991C6.72 9.03991 6.16 9.03991 5.82 9.37991C5.48 9.71991 5.48 10.2699 5.82 10.6199L8.2 12.9899C8.37 13.1599 8.59 13.2399 8.81 13.2399C9.04 13.2399 9.26 13.1599 9.43 12.9899Z"
            />
          </svg>
          <div className="description">{description}</div>
        </div>
        <div className="pair">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.67 -9.15527e-05H14.34C17.73 -9.15527e-05 20 2.37991 20 5.91991V14.0909C20 17.6199 17.73 19.9999 14.34 19.9999H5.67C2.28 19.9999 0 17.6199 0 14.0909V5.91991C0 2.37991 2.28 -9.15527e-05 5.67 -9.15527e-05ZM9.43 12.9899L14.18 8.23991C14.52 7.89991 14.52 7.34991 14.18 6.99991C13.84 6.65991 13.28 6.65991 12.94 6.99991L8.81 11.1299L7.06 9.37991C6.72 9.03991 6.16 9.03991 5.82 9.37991C5.48 9.71991 5.48 10.2699 5.82 10.6199L8.2 12.9899C8.37 13.1599 8.59 13.2399 8.81 13.2399C9.04 13.2399 9.26 13.1599 9.43 12.9899Z"
            />
          </svg>
          <div className="description">{description}</div>
        </div>
        <div className="pair">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.67 -9.15527e-05H14.34C17.73 -9.15527e-05 20 2.37991 20 5.91991V14.0909C20 17.6199 17.73 19.9999 14.34 19.9999H5.67C2.28 19.9999 0 17.6199 0 14.0909V5.91991C0 2.37991 2.28 -9.15527e-05 5.67 -9.15527e-05ZM9.43 12.9899L14.18 8.23991C14.52 7.89991 14.52 7.34991 14.18 6.99991C13.84 6.65991 13.28 6.65991 12.94 6.99991L8.81 11.1299L7.06 9.37991C6.72 9.03991 6.16 9.03991 5.82 9.37991C5.48 9.71991 5.48 10.2699 5.82 10.6199L8.2 12.9899C8.37 13.1599 8.59 13.2399 8.81 13.2399C9.04 13.2399 9.26 13.1599 9.43 12.9899Z"
            />
          </svg>
          <div className="description">{description}</div>
        </div>
        <div className="pair">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.67 -9.15527e-05H14.34C17.73 -9.15527e-05 20 2.37991 20 5.91991V14.0909C20 17.6199 17.73 19.9999 14.34 19.9999H5.67C2.28 19.9999 0 17.6199 0 14.0909V5.91991C0 2.37991 2.28 -9.15527e-05 5.67 -9.15527e-05ZM9.43 12.9899L14.18 8.23991C14.52 7.89991 14.52 7.34991 14.18 6.99991C13.84 6.65991 13.28 6.65991 12.94 6.99991L8.81 11.1299L7.06 9.37991C6.72 9.03991 6.16 9.03991 5.82 9.37991C5.48 9.71991 5.48 10.2699 5.82 10.6199L8.2 12.9899C8.37 13.1599 8.59 13.2399 8.81 13.2399C9.04 13.2399 9.26 13.1599 9.43 12.9899Z"
            />
          </svg>
          <div className="description">{description}</div>
        </div>
      </Bottom>
    </Wrapper>
  );
};

export default PricingCard;
