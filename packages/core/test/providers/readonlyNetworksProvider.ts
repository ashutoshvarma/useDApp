import { expect } from 'chai'
import { getProvidersFromConfig } from '../../src/providers/network/readonlyNetworks/provider'
import { Kovan, Mainnet, Rinkeby, Ropsten } from '../../src'
import { JsonRpcProvider } from '@ethersproject/providers'

describe('ReadonlyNetworksProvider', () => {
  it('getProvidersFromConfig creates provider for each network that has URL', async () => {
    const networks = [Mainnet, Ropsten, Rinkeby]
    const urls = {
      [Mainnet.chainId]: 'mainnetUrl',
      [Rinkeby.chainId]: 'rinkebyUrl',
      [Kovan.chainId]: 'kovanUrl',
    }
    const providers = getProvidersFromConfig(networks, urls)
    expect(Object.keys(providers)).to.deep.equal([Mainnet.chainId.toString(), Rinkeby.chainId.toString()])
    expect(providers[Mainnet.chainId]).to.be.instanceOf(JsonRpcProvider)
    expect(providers[Mainnet.chainId].connection.url).to.equal('mainnetUrl')
    expect(providers[Rinkeby.chainId].connection.url).to.equal('rinkebyUrl')
  })
})