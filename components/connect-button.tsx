import { ConnectButton as Connect } from '@rainbow-me/rainbowkit'

type Props = {}

export const ConnectButton = ({}: Props) => {
  return (
    <>
      <Connect.Custom>
        {({
          account,
          chain,
          openAccountModal,
          openChainModal,
          openConnectModal,
          authenticationStatus,
          mounted,
        }) => {
          // Note: If your app doesn't use authentication, you
          // can remove all 'authenticationStatus' checks
          const ready = mounted && authenticationStatus !== 'loading'
          const connected =
            ready &&
            account &&
            chain &&
            (!authenticationStatus || authenticationStatus === 'authenticated')

          return (
            <span
              className="tw-inline-flex tw-cursor-pointer tw-rounded-md tw-shadow"
              {...(!ready && {
                'aria-hidden': true,
                style: {
                  opacity: 0,
                  pointerEvents: 'none',
                  userSelect: 'none',
                },
              })}
            >
              {(() => {
                if (!connected) {
                  return (
                    <a
                      onClick={openConnectModal}
                      className="border tw-hover:bg-gray-50 tw-inline-flex tw-items-center tw-rounded-md tw-border-transparent tw-bg-white tw-px-4 tw-py-2 tw-text-base tw-font-medium tw-text-neutral-600"
                    >
                      Log in
                    </a>
                  )
                }

                if (chain.unsupported) {
                  return (
                    <a
                      onClick={openChainModal}
                      className="tw-inline-flex tw-items-center tw-rounded-md tw-border tw-border-transparent tw-bg-white tw-px-4 tw-py-2 tw-text-base tw-font-medium tw-text-neutral-600 hover:tw-bg-gray-50"
                    >
                      Wrong network
                    </a>
                  )
                }

                return (
                  <>
                    {/*<a
                        onClick={openChainModal}
                        className="tw-inline-flex tw-items-center tw-px-4 tw-py-2 tw-border tw-border-transparent tw-text-base tw-font-medium tw-rounded-md tw-text-neutral-600 tw-bg-white hover:tw-bg-gray-50"
                      >
                        {chain.hasIcon && (
                          <div
                            style={{
                              background: chain.iconBackground,
                              width: 12,
                              height: 12,
                              borderRadius: 999,
                              overflow: 'hidden',
                              marginRight: 4,
                            }}
                          >
                            {chain.iconUrl && (
                              <img
                                alt={chain.name ?? 'Chain icon'}
                                src={chain.iconUrl}
                                style={{width: 12, height: 12}}
                              />
                            )}
                          </div>
                        )}
                        {chain.name}
                      </a>*/}

                    <a
                      onClick={openAccountModal}
                      className="tw-inline-flex tw-items-center tw-rounded-md tw-border tw-border-transparent tw-bg-white tw-px-4 tw-py-2 tw-text-base tw-font-medium tw-text-neutral-600 hover:tw-bg-gray-50"
                    >
                      {account.displayName}
                      {account.displayBalance
                        ? ` (${account.displayBalance})`
                        : ''}
                    </a>
                  </>
                )
              })()}
            </span>
          )
        }}
      </Connect.Custom>
    </>
  )
}
