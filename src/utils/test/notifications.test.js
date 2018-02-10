import React from 'react'
import * as notifications from '../notifications'

describe('notifications', () => {
  test('sagaErrorNotification without message', () => {
    const spy = jest.fn()
    notifications.sagaErrorNotification('danger')(spy)
    expect(spy).toHaveBeenCalled();
  }),
  test('successNotification without params', () => {
    const spy = jest.fn()
    const result = notifications.successNotification()(spy)
    expect(spy).toHaveBeenCalled();
  }),
  test('successNotification with params', () => {
    const spy = jest.fn()
    const message = 'Test message'
    const dismissAfter = 3000
    const result = notifications.successNotification(message, dismissAfter)(spy)
    expect(spy).toHaveBeenCalled();
  }),
  test('errorNotification without params', () => {
    const spy = jest.fn()
    const result = notifications.errorNotification()(spy)
    expect(spy).toHaveBeenCalled();
  }),
  test('errorNotification with params', () => {
    const spy = jest.fn()
    const message = 'Test message'
    const dismissAfter = 3000
    const result = notifications.errorNotification(message, dismissAfter)(spy)
    expect(spy).toHaveBeenCalled();
  })
});

