package wordpostgres

import (
	"testing"

	"github.com/Kin-dza-dzaa/flash_cards_api/internal/entity"
	"github.com/stretchr/testify/suite"
)

// Sute for testing AddWordToCollection method, embeds PostgresTestBase suite.
type AddWordToColl_Suite struct {
	PostgresBase_Suite
	tcs []struct {
		Name    string
		Coll    entity.Collection
		WantErr bool
	}
}

// Sets test case data and adds translation to db if necessary.
func (s *AddWordToColl_Suite) SetupTest() {
	s.tcs = []struct {
		Name    string
		Coll    entity.Collection
		WantErr bool
	}{
		{
			Name: "Add existing word",
			Coll: entity.Collection{
				Name:   "test_coll",
				Word:   "test_word",
				UserID: "12345",
			},
			WantErr: false,
		},
		{
			Name: "Add not existing word",
			Coll: entity.Collection{
				Name:   "test_coll",
				Word:   "not_exist",
				UserID: "12345",
			},
			WantErr: true,
		},
	}

	for _, tc := range s.tcs {
		if !tc.WantErr {
			if err := s.pg.AddTranslation(s.ctx,
				entity.WordTrans{Word: tc.Coll.Word}); err != nil {
				s.FailNow(err.Error())
			}
		}
	}
}

func (s *AddWordToColl_Suite) Test_AddWordToCollcection() {
	for _, tc := range s.tcs {
		s.Run(tc.Name, func() {
			err := s.pg.AddWordToCollection(s.ctx, tc.Coll)
			if tc.WantErr {
				s.Assert().Error(err, "Err must be not nil")
			} else {
				s.Assert().Nil(err, "Err must be nil")
			}
		})
	}
}

func Test_AddTransToColl_Suite(t *testing.T) {
	suite.Run(t, new(AddWordToColl_Suite))
}
