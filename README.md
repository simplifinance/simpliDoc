SimpliFinance

# FlexPool

FlexPool is one of Simplifinance's products. It is a customized liquidity pool for short-term crypto loan service focusing on all categories of users. Its design emphasizes on true decentralization, user-control, and healthy loan competition to accomodate lower-class to middle-class users. Through liquidity synergy, users can create large pool of funds, with little or no interest, rotate it in form or loan among themselves, invest collateral on the Yield dashboard, and share the proceeds accordingly.
The liquidity generated in a pool can only be borrowed by the participants. 

This service enables users to effectively utilize their XFI while quickly accessing stable assets for market opportunities. To access pooled funds, users will need to stake XFI equivalent to the total current pool based on the prevailing market price of XFI and collateral factor. In future release, users will be able to decide which yield strategy they want to invest their collateral. The combine flexibility power of FlexPool and the Yield strategy protocol enables users to improve capital efficiency and maximize idle collateral. 

# Why choose FlexPool?

- [Flexible and expandable borrowing limits](). The limits of loan accessible in any pool is based on the number of providers. The higher the providers the higher the contributed liquidity.

- [Customized pool with varied loan-based assets options](). The flexibility of loans depends on the users since 95% of the parameters are provided by the users while they are free to choose from the numbers of approved loan-based assets;

- [Uncontendable Withdrawable funds](). Funds are available for use when the [quorum]() is achieved and the [turnTime]() has passed. 

- [Secure and investable collateral](). In FlexPool, collaterals are put to use rather than sitting idle. This way, it generates more profits for the user.

- [Competitive little-or-no interest rate](). FlexPool may or may not charge interest on loans. If Bob, Alice and Joe who are friends agreed to use FlexPool, they may conclude a no-interest epoch if they will all use epoch duration instead of personal duration choice. This can also happen if Bob single-handedly created a FlexPool with no preselected members. This type of pool is what we termed [permissioned]();

# Uniqueness of FlexPool and its advantages over existing liquidity protocols

- __Flexibility__. 
A FlexPool derives its name from the flexible options it offers to users. Exisitng liquidity protocols have a unified liquidity pool created by the protocol where loans are sourced. In contrast, FlexPools is a combination of several liquidity pools created by users. 

- __Control and censorship__. 
Existing liquidity pools (_ELP_) are controlled and watched by the team or DAO but FlexPools are controlled and run by users. 

- __Failure point__. 
ELP have a single point of failure during security breachs or in the event where potential vulnerability is exploited which may lead to loss of funds that may significantly put the protocol on its kneel. The permissioned and permissionless nature of FlexPool brings greater decentralization and sense of responsibility to its participants since they're acting as the providers and borrowers at the same time. A bad actor in a permissioned pool will be known ahead by the creator and the chance of succeding is very tiny and almost impossible. In a permissionless FlexPool, same sense of responsibity is required except the providers may not be known.

- __Inclusion__. 
Most ELPs are quite technical and suited for high-class, institutional, and VIP users excluding the lower-class to middle-class users. While FlexPool largley consider the excluded ones, other class of users can explore its benefits. 

- __Unbeatable interest rate model__. Simplifinance has different FlexPool models that can be explored by the users with little or no interest. The users of permissioned flexPool often are people in the same community, locality or same chain of friends. They decide whether to charge interest or not. Generally, in FlexPool, if interest are spotted at least, they become very competitive and are extremely low to attract participants while in ELPs, interest is an unavoidable fuel of the protocol since providers profit largely from it. 

- __Investment opportunities__. 
Through smart contracts, FlexPools are logically connected to yield strategies aggregated on our YS dashboard where users can directly and optionally invest borrowed funds and collaterals, and choose which strategies that best fit their needs.


# Parameters

## Unit liquidity

This is the amount of liquidity to be provided by each provider/participant of a FlexPool.

## Asset

Users are able to choose from the interface the asset they want to operate with. Assets selected from the interface are pre-approved stablecoins  

## Collateral Factor

Collateral factor/coverage is usually determined by the creator of FlexPool at the point of creation. This is the percentage of loan that is secure by discounted by the value of XFI. If a FlexPool has 100 `USDT` as the loan base while collateral factor is 150. If the price of XFI at borrow point is `$0.5 USDT` the required collateral in XFI will be calculated as

```
    collateralNeeded = ((100/0.5) * 150) / 100
```

## Quorum 

The mumber of participants allowed in a pool. It is explicit and is required when user wants to create a permissionless pool. If permissioned, the quorum is the length of supplied participating addresses. The minimum number of participants in a FlexPool is 2 and maximum is 255.


## Duration

The length of time that the loan is due for repayment which determines the length of an epoch. This periods are often short and are specified in hours. While `Duration` is set for an epoch, users may specify their choice when they want to [GetFinance](), and will be considered first. Borrower's choice must not be greater than the epoch's.  Maximum epoch duration is currently pegged at 30 days equivalent to `720 hrs`, and may be expanded in the future. 

## Interest percent

The minimum amount (in percentage) that should be charged as interest on loans. If at least interest should be charged, the minimum interest is pegged at _0.01%_ for a full duration. Since duration are short, interests are calculated per second. 
Example: Consider interest per sec calculated as `0.555` with full duration of 24 hours. If the borrower returned the loan on the 10th hour, the interest is calculate on the period between the release and return periods. 

```
    interest = 0.555 * (10 * 60 * 60)
```

To supply interest parameter, users should multiply the interest percent by 100 and give the result as parameter.

```
    e.g 0.01 * 100 = 1
```

<!-- https://simplifi-st5h.vercel.app/dashboard -->
<!-- https://youtu.be/SwPouAJYx6E -->