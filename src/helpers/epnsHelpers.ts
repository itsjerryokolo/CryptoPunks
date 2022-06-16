import { BIGINT_ZERO } from '../constant'
import {
	EpnsPushNotification,
	EpnsNotificationCounter,
} from '../../generated/schema'

export function getOrCreateEpnsNotificationCounter(
	subgraphID_ONE: string
): EpnsNotificationCounter {
	let epnsNotificationCounter = EpnsNotificationCounter.load(subgraphID_ONE)
	if (!epnsNotificationCounter) {
		epnsNotificationCounter = new EpnsNotificationCounter(subgraphID_ONE)
		epnsNotificationCounter.totalCount = BIGINT_ZERO
	}
	return epnsNotificationCounter
}

export function getOrCreateEpnsNotification(
	subgraphID_TWO: string
): EpnsPushNotification {
	let epnsPushNotification = EpnsPushNotification.load(subgraphID_TWO)
	if (!epnsPushNotification) {
		epnsPushNotification = new EpnsPushNotification(subgraphID_TWO)
	}
	return epnsPushNotification
}
