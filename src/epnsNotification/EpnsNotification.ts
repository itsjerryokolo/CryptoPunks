import { BIGINT_ONE, subgraphID } from '../constant'
import {
	getOrCreateEpnsNotificationCounter,
	getOrCreateEpnsNotification,
} from '../helpers/epnsHelpers'

export function sendEpnsNotification(
	recipient: string,
	notification: string
): void {
	let id1 = subgraphID
	let epnsNotificationCounter = getOrCreateEpnsNotificationCounter(id1)
	epnsNotificationCounter.totalCount = epnsNotificationCounter.totalCount.plus(
		BIGINT_ONE
	)

	let count = epnsNotificationCounter.totalCount.toString()
	let id2 = `${subgraphID}+${count}`

	let epnsPushNotification = getOrCreateEpnsNotification(id2)
	epnsPushNotification.recipient = recipient
	epnsPushNotification.notification = notification
	epnsPushNotification.notificationNumber = epnsNotificationCounter.totalCount

	epnsPushNotification.save()
	epnsNotificationCounter.save()
}
