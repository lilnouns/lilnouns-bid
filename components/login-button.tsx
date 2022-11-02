import {ConnectButton} from "@rainbow-me/rainbowkit";

type Props = {};

const LoginButton = ({}: Props) => {
  return (
    <>
      <ConnectButton.Custom>
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
          const ready = mounted && authenticationStatus !== 'loading';
          const connected =
            ready &&
            account &&
            chain &&
            (!authenticationStatus ||
              authenticationStatus === 'authenticated');

          return (
            <span
              className="inline-flex rounded-md shadow cursor-pointer"
              {...(!ready && {
                'aria-hidden': true,
                'style': {
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
                        className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-neutral-600 bg-white hover:bg-gray-50"
                      >
                        Log in
                      </a>
                    );
                  }

                  if (chain.unsupported) {
                    return (
                      <a
                        onClick={openChainModal}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-neutral-600 bg-white hover:bg-gray-50"
                      >
                        Wrong network
                      </a>
                    );
                  }

                  return (
                    <>
                      {/*<a
                        onClick={openChainModal}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-neutral-600 bg-white hover:bg-gray-50"
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
                        className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-neutral-600 bg-white hover:bg-gray-50"
                      >
                        {account.displayName}
                        {account.displayBalance
                          ? ` (${account.displayBalance})`
                          : ''}
                      </a>
                    </>
                  );
                })()}
              </span>
          );
        }}
      </ConnectButton.Custom>
    </>
  );
};

export default LoginButton
