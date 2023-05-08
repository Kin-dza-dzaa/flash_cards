// Code generated by mockery v2.20.0. DO NOT EDIT.

package srvmock

import (
	context "context"

	entity "github.com/Kin-dza-dzaa/flash_cards_api/internal/entity"
	mock "github.com/stretchr/testify/mock"
)

// WordService is an autogenerated mock type for the WordService type
type WordService struct {
	mock.Mock
}

// AddWord provides a mock function with given fields: ctx, collection
func (_m *WordService) AddWord(ctx context.Context, collection entity.Collection) error {
	ret := _m.Called(ctx, collection)

	var r0 error
	if rf, ok := ret.Get(0).(func(context.Context, entity.Collection) error); ok {
		r0 = rf(ctx, collection)
	} else {
		r0 = ret.Error(0)
	}

	return r0
}

// DeleteWord provides a mock function with given fields: ctx, collection
func (_m *WordService) DeleteWord(ctx context.Context, collection entity.Collection) error {
	ret := _m.Called(ctx, collection)

	var r0 error
	if rf, ok := ret.Get(0).(func(context.Context, entity.Collection) error); ok {
		r0 = rf(ctx, collection)
	} else {
		r0 = ret.Error(0)
	}

	return r0
}

// UpdateLearnInterval provides a mock function with given fields: ctx, collection
func (_m *WordService) UpdateLearnInterval(ctx context.Context, collection entity.Collection) error {
	ret := _m.Called(ctx, collection)

	var r0 error
	if rf, ok := ret.Get(0).(func(context.Context, entity.Collection) error); ok {
		r0 = rf(ctx, collection)
	} else {
		r0 = ret.Error(0)
	}

	return r0
}

// UserWords provides a mock function with given fields: ctx, collection
func (_m *WordService) UserWords(ctx context.Context, collection entity.Collection) (*entity.UserWords, error) {
	ret := _m.Called(ctx, collection)

	var r0 *entity.UserWords
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, entity.Collection) (*entity.UserWords, error)); ok {
		return rf(ctx, collection)
	}
	if rf, ok := ret.Get(0).(func(context.Context, entity.Collection) *entity.UserWords); ok {
		r0 = rf(ctx, collection)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*entity.UserWords)
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, entity.Collection) error); ok {
		r1 = rf(ctx, collection)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

type mockConstructorTestingTnewWordService interface {
	mock.TestingT
	Cleanup(func())
}

// NewWordService creates a new instance of wordService. It also registers a testing interface on the mock and a cleanup function to assert the mocks expectations.
func NewWordService(t mockConstructorTestingTnewWordService) *WordService {
	mock := &WordService{}
	mock.Mock.Test(t)

	t.Cleanup(func() { mock.AssertExpectations(t) })

	return mock
}