// Code generated by mockery v2.20.0. DO NOT EDIT.

package wordrepomock

import (
	context "context"

	"github.com/Kin-dza-dzaa/flash_cards_api/internal/entity"
	"github.com/stretchr/testify/mock"
)

// WordRepository is an autogenerated mock type for the WordRepository type
type WordRepository struct {
	mock.Mock
}

// AddTranslation provides a mock function with given fields: ctx, wordTrans
func (_m *WordRepository) AddTranslation(ctx context.Context, wordTrans entity.WordTrans) error {
	ret := _m.Called(ctx, wordTrans)

	var r0 error
	if rf, ok := ret.Get(0).(func(context.Context, entity.WordTrans) error); ok {
		r0 = rf(ctx, wordTrans)
	} else {
		r0 = ret.Error(0)
	}

	return r0
}

// AddWord provides a mock function with given fields: ctx, collection
func (_m *WordRepository) AddWord(ctx context.Context, collection entity.Collection) error {
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
func (_m *WordRepository) DeleteWord(ctx context.Context, collection entity.Collection) error {
	ret := _m.Called(ctx, collection)

	var r0 error
	if rf, ok := ret.Get(0).(func(context.Context, entity.Collection) error); ok {
		r0 = rf(ctx, collection)
	} else {
		r0 = ret.Error(0)
	}

	return r0
}

// IsTransInDB provides a mock function with given fields: ctx, collection
func (_m *WordRepository) IsTransInDB(ctx context.Context, collection entity.Collection) (bool, error) {
	ret := _m.Called(ctx, collection)

	var r0 bool
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, entity.Collection) (bool, error)); ok {
		return rf(ctx, collection)
	}
	if rf, ok := ret.Get(0).(func(context.Context, entity.Collection) bool); ok {
		r0 = rf(ctx, collection)
	} else {
		r0 = ret.Get(0).(bool)
	}

	if rf, ok := ret.Get(1).(func(context.Context, entity.Collection) error); ok {
		r1 = rf(ctx, collection)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// IsWordInCollection provides a mock function with given fields: ctx, collection
func (_m *WordRepository) IsWordInCollection(ctx context.Context, collection entity.Collection) (bool, error) {
	ret := _m.Called(ctx, collection)

	var r0 bool
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, entity.Collection) (bool, error)); ok {
		return rf(ctx, collection)
	}
	if rf, ok := ret.Get(0).(func(context.Context, entity.Collection) bool); ok {
		r0 = rf(ctx, collection)
	} else {
		r0 = ret.Get(0).(bool)
	}

	if rf, ok := ret.Get(1).(func(context.Context, entity.Collection) error); ok {
		r1 = rf(ctx, collection)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// UpdateLearnInterval provides a mock function with given fields: ctx, collection
func (_m *WordRepository) UpdateLearnInterval(ctx context.Context, collection entity.Collection) error {
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
func (_m *WordRepository) UserWords(ctx context.Context, collection entity.Collection) (*entity.UserWords, error) {
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

type mockConstructorTestingTNewWordPostgres interface {
	mock.TestingT
	Cleanup(func())
}

// NewWordPostgres creates a new instance of WordPostgres. It also registers a testing interface on the mock and a cleanup function to assert the mocks expectations.
func NewWordPostgres(t mockConstructorTestingTNewWordPostgres) *WordRepository {
	mock := &WordRepository{}
	mock.Mock.Test(t)

	t.Cleanup(func() { mock.AssertExpectations(t) })

	return mock
}
